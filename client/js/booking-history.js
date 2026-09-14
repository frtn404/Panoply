/**
 * booking-history.js — Panoply
 * Loads real job history from API with filter and search.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';

let allJobs     = [];
let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', async () => {
// Update page title based on role
const pageTitle = document.querySelector('h1');
if (pageTitle && user.role === 'provider') {
    pageTitle.innerHTML = 'My <em>jobs</em>';
}
    await loadJobs();
});
// Set dashboard link based on role
const dashLink = document.getElementById('dashboard-link');
if (dashLink) {
    dashLink.href = user.role === 'provider' 
        ? 'provider-dashboard.html' 
        : 'customer-dashboard.html';
}

async function loadJobs() {
    try {
        const res  = await fetch(`${API_URL}/requests/my`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) {
            console.error('Failed to load jobs:', data.message);
            return;
        }

        allJobs = data.serviceRequests;
        renderJobs(allJobs);

        // Update page subtitle
        const total     = allJobs.length;
        const active    = allJobs.filter(j => ['pending','assigning','accepted','in_progress'].includes(j.status)).length;
        const completed = allJobs.filter(j => j.status === 'completed').length;
        const cancelled = allJobs.filter(j => j.status === 'cancelled').length;

        const subtitle = document.getElementById('history-subtitle');
        if (subtitle) {
            subtitle.textContent = `${total} total jobs · ${completed} completed · ${active} active · ${cancelled} cancelled`;
        }

    } catch (err) {
        console.error('Load jobs error:', err);
    }
}

function renderJobs(jobs) {
    const list = document.getElementById('history-list');
    if (!list) return;

    if (jobs.length === 0) {
        list.innerHTML = `
            <div class="history-empty">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <p>No jobs match this filter.</p>
            </div>`;
        return;
    }

    list.innerHTML = jobs.map(j => `
        <div class="history-card" data-status="${j.status}" data-title="${j.category}" onclick="openJobModal(${j.id})" style="cursor:pointer">
            <div class="history-card-icon" style="background:var(--amber-dim)">
                <svg viewBox="0 0 24 24" style="stroke:var(--amber)"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div class="history-card-info">
                <h3>${j.category}</h3>
                <p>${j.description.substring(0, 60)}... · ${j.address}</p>
            </div>
            <div class="history-card-right">
                <div class="history-card-date">${new Date(j.createdAt).toLocaleDateString()}</div>
                <div class="job-status status-${getStatusClass(j.status)}">${j.status.replace('_', ' ')}</div>
            </div>
        </div>
    `).join('');
}

function getStatusClass(status) {
    if (status === 'completed')  return 'done';
    if (status === 'cancelled' || status === 'failed') return 'cancelled';
    if (['pending','assigning','accepted','in_progress'].includes(status)) return 'progress';
    return 'pending';
}

function filterJobs(btn, status) {
    activeFilter = status;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

function searchJobs(query) {
    applyFilters(query.toLowerCase());
}

function applyFilters(query = '') {
    let filtered = allJobs;

    if (activeFilter !== 'all') {
        if (activeFilter === 'active') {
            filtered = filtered.filter(j => ['pending','assigning','accepted','in_progress'].includes(j.status));
        } else {
            filtered = filtered.filter(j => j.status === activeFilter);
        }
    }

    if (query) {
        filtered = filtered.filter(j =>
            j.category.toLowerCase().includes(query) ||
            j.description.toLowerCase().includes(query)
        );
    }

    renderJobs(filtered);
}
// ── Job detail modal ───────────────────────────────────────
async function openJobModal(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('job-modal');
    const content = document.getElementById('job-modal-content');

    content.innerHTML = `
        <div class="modal-job-header">
            <h3>${job.category}</h3>
            <div class="job-status status-${getStatusClass(job.status)}">${job.status.replace('_', ' ')}</div>
        </div>
        <div class="modal-job-details">
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Address:</strong> ${job.address}</p>
            <p><strong>Scheduled:</strong> ${new Date(job.scheduledDate).toLocaleDateString()}</p>
            ${job.amount ? `<p><strong>Amount:</strong> ₦${job.amount.toLocaleString()}</p>` : ''}
            ${job.provider ? `<p><strong>Provider:</strong> ${job.provider.fullName}</p>` : ''}
        </div>

       ${job.status === 'accepted' ? `
<div class="otp-section" id="otp-section-${job.id}">
    <h4 style="margin-bottom:0.75rem">Meeting Verification</h4>
    <p style="color:var(--muted2);font-size:0.85rem;margin-bottom:1rem">
        When you meet, generate OTPs to verify each other's identity.
    </p>
    <button class="btn-amber" onclick="generateOtp(${job.id})" id="generate-otp-btn-${job.id}">
        Generate OTPs
    </button>
    <div id="otp-display-${job.id}" style="display:none;margin-top:1rem">
        <div class="otp-box">
            <div class="otp-label">Your OTP — show this to the ${user.role === 'customer' ? 'provider' : 'customer'}</div>
            <div class="otp-code" id="otp-code-${job.id}">------</div>
            <div class="otp-expiry" id="otp-expiry-${job.id}" style="font-size:0.75rem;color:var(--muted2);margin-top:0.5rem"></div>
        </div>
        <div style="margin-top:1rem">
            <label style="font-size:0.85rem;color:var(--muted2);display:block;margin-bottom:0.5rem">
                Enter ${user.role === 'customer' ? "provider's" : "customer's"} OTP
            </label>
            <div style="display:flex;gap:0.5rem">
                <input type="text" id="otp-input-${job.id}" maxlength="6"
                    placeholder="6-digit OTP"
                    style="flex:1;padding:0.6rem 1rem;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--cream);font-size:1rem;letter-spacing:0.2em"/>
                <button class="btn-save" onclick="verifyOtp(${job.id})">Verify</button>
            </div>
        </div>
    </div>
</div>
` : ''}
${(job.status === 'accepted' || job.status === 'in_progress') ? `
<div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--border)">
    <h4 style="margin-bottom:0.75rem">Payment</h4>
    <div id="payment-section-${job.id}">
        <p style="color:var(--muted2);font-size:0.85rem;margin-bottom:1rem">
            Pay securely via Paystack. Funds are held in escrow until job is completed.
        </p>
        <div style="display:flex;gap:0.75rem;align-items:center">
            <input type="number" id="payment-amount-${job.id}" 
                placeholder="Enter amount (₦)"
                style="flex:1;padding:0.6rem 1rem;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--cream)"/>
            <button class="btn-save" onclick="initiatePayment(${job.id})">Pay with Paystack</button>
        </div>
    </div>
</div>
` : ''}
${job.status === 'quoted' && user.role === 'customer' ? `
<div style="margin-top:1.5rem;padding:1.25rem;background:var(--amber-dim);border:1px solid rgba(212,168,73,0.2);border-radius:12px">
    <h4 style="color:var(--amber);margin-bottom:0.5rem">Quote received</h4>
    <div style="font-size:1.8rem;font-family:'Instrument Serif',serif;color:var(--amber);margin-bottom:0.5rem">
        ₦${job.quote?.toLocaleString() || '—'}
    </div>
    ${job.quoteMessage ? `<p style="color:var(--muted2);font-size:0.85rem;margin-bottom:1rem">"${job.quoteMessage}"</p>` : ''}
    <p style="color:var(--muted2);font-size:0.82rem;margin-bottom:1rem">
        Accept to confirm the provider. Reject to find another provider.
    </p>
    <div style="display:flex;gap:0.75rem">
        <button class="btn-save" onclick="respondToQuote(${job.id}, 'accept')">
            Accept ₦${job.quote?.toLocaleString()}
        </button>
        <button class="btn-cancel" onclick="respondToQuote(${job.id}, 'reject')" style="padding:0.6rem 1.25rem;border-radius:8px;border:1px solid var(--border);background:none;color:var(--muted2);cursor:pointer">
            Reject quote
        </button>
    </div>
</div>
` : ''}

        ${job.status === 'in_progress' ? `
        <div style="padding:1rem;background:var(--green-dim);border-radius:8px;margin-top:1rem">
            <p style="color:var(--green);font-size:0.85rem">✓ Identity verified — job is in progress</p>
        </div>
        ` : ''}
    `;

    modal.style.display = 'flex';
}

function closeJobModal() {
    document.getElementById('job-modal').style.display = 'none';
}

async function generateOtp(jobId) {
    try {
        const res = await fetch(`${API_URL}/otp/${jobId}/generate`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        document.getElementById(`otp-display-${jobId}`).style.display = 'block';
        document.getElementById(`otp-code-${jobId}`).textContent = data.yourOtp;
        document.getElementById(`generate-otp-btn-${jobId}`).textContent = 'Regenerate OTPs';

        const expiry = new Date(data.expiresAt);
        document.getElementById(`otp-expiry-${jobId}`).textContent =
            `Expires at ${expiry.toLocaleTimeString()}`;

    } catch (err) {
        console.error('Generate OTP error:', err);
    }
}

async function verifyOtp(jobId) {
    const otp = document.getElementById(`otp-input-${jobId}`).value.trim();

    if (!otp || otp.length !== 6) {
        alert('Please enter the 6-digit OTP from your provider.');
        return;
    }

    try {
        const res = await fetch(`${API_URL}/otp/${jobId}/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ otp })
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        alert('Identity verified! Job is now in progress.');
        closeJobModal();
        await loadJobs();

    } catch (err) {
        console.error('Verify OTP error:', err);
    }
}
// Availability toggle for providers
async function toggleAvail() {
    const token = localStorage.getItem('token');
    const toggleEl = document.getElementById('avail-toggle');
    const labelEl  = document.getElementById('avail-label');

    const isNowAvailable = labelEl.textContent === 'Unavailable';

    if (isNowAvailable) {
        toggleEl.classList.remove('off');
        labelEl.textContent = 'Available';
        labelEl.className   = 'avail-label on';
    } else {
        toggleEl.classList.add('off');
        labelEl.textContent = 'Unavailable';
        labelEl.className   = 'avail-label off';
    }

    try {
        await fetch(`${API_URL}/profiles/provider`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ isAvailable: isNowAvailable })
        });
    } catch (err) {
        console.error('Availability update error:', err);
    }
} 
async function initiatePayment(jobId) {
    const amountInput = document.getElementById(`payment-amount-${jobId}`);
    const amount      = parseFloat(amountInput.value);

    if (!amount || amount < 100) {
        alert('Please enter a valid amount (minimum ₦100).');
        return;
    }

    try {
        const res  = await fetch(`${API_URL}/payments/initialize`, {
            method: 'POST',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ jobId: String(jobId), amount })
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Payment initialization failed.');
            return;
        }
        // Backup token to sessionStorage before Paystack redirect
            sessionStorage.setItem('token_backup', token);
            sessionStorage.setItem('user_backup', localStorage.getItem('user'));

        // Redirect to Paystack checkout
        window.location.href = data.authorization_url;

    } catch (err) {
        alert('Cannot connect to server.');
        console.error('Payment error:', err);
    }
}
async function respondToQuote(jobId, action) {
    try {
        const res = await fetch(`${API_URL}/requests/${jobId}/quote-response`, {
            method: 'PATCH',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ action })
        });
        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Failed to respond to quote.');
            return;
        }

        alert(action === 'accept'
            ? `Quote accepted! Provider will be on their way. Amount: ₦${data.serviceRequest.amount?.toLocaleString()}`
            : 'Quote rejected. Job is back in the pool.'
        );

        closeJobModal();
        await loadJobs();

    } catch (err) {
        console.error('Quote response error:', err);
    }
}