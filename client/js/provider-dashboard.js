/**
 * provider-dashboard.js — Panoply
 * Loads real provider data, available jobs, and handles availability toggle.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';
if (user && user.role !== 'provider') window.location.href = 'customer-dashboard.html';

// ── Populate user info ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;

    const firstName = user.fullName.split(' ')[0];

    const sidebarName = document.getElementById('sidebar-name');
    const sidebarRole = document.getElementById('sidebar-role');
    const greeting    = document.getElementById('dashboard-greeting');
    const avatar      = document.getElementById('sidebar-avatar');

    if (sidebarName) sidebarName.textContent = user.fullName;
    if (sidebarRole) sidebarRole.textContent = 'Provider';
    if (greeting)    greeting.textContent    = firstName + '.';
    if (avatar) {
        avatar.textContent = user.fullName
            .split(' ')
            .map(n => n[0])
            .join('');
    }

    // Load availability status from profile
    try {
        const res  = await fetch(`${API_URL}/profiles/provider/${user.id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.profile) {
            isAvailable = data.profile.isAvailable;
            updateAvailUI();

            // Update stats
            const ratingEl = document.getElementById('stat-rating');
            const jobsEl   = document.getElementById('stat-jobs');
            if (ratingEl) ratingEl.textContent = data.profile.averageRating || '0';
            if (jobsEl)   jobsEl.textContent   = data.profile.completedJobsCount || '0';
        }
    } catch (err) {
        console.error('Profile load error:', err);
    }

    // Load available job requests
    loadAvailableJobs();
    loadMyJobs();
});

// ── Available jobs ─────────────────────────────────────────
async function loadAvailableJobs() {
    const container = document.getElementById('available-jobs');
    if (!container) return;

    try {
        const res  = await fetch(`${API_URL}/requests/available`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok || data.requests.length === 0) {
            container.innerHTML = '<p style="color:var(--muted2);padding:1rem">No available jobs right now.</p>';
            return;
        }

        container.innerHTML = data.requests.map(r => `
            <div class="job-item">
                <div class="job-icon default">
                    <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div class="job-info">
                    <h4>${r.category} — ${r.description.substring(0, 50)}...</h4>
                    <p>${r.customer.fullName} · ${r.address}</p>
                </div>
                <div style="display:flex;gap:0.5rem">
                    <button class="btn-accept" onclick="respondToJob(${r.id}, 'accept')">Accept</button>
                    <button class="btn-decline" onclick="respondToJob(${r.id}, 'reject')">Decline</button>
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('Jobs load error:', err);
    }
}
async function loadMyJobs() {
    const container = document.getElementById('my-jobs');
    if (!container) return;

    try {
        const res  = await fetch(`${API_URL}/requests/my`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok || data.serviceRequests.length === 0) {
            container.innerHTML = '<p style="color:var(--muted2);padding:1rem">No jobs yet.</p>';
            return;
        }

        container.innerHTML = data.serviceRequests.map(r => `
            <div class="job-item">
                <div class="job-icon default">
                    <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div class="job-info">
                    <h4>${r.category} — ${r.description.substring(0, 40)}...</h4>
                    <p>${r.customer?.fullName || 'Customer'} · ${r.address}</p>
                </div>
                <div class="job-status status-${r.status === 'in_progress' ? 'progress' : r.status === 'completed' ? 'done' : 'pending'}">
                    ${r.status.replace('_', ' ')}
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('My jobs error:', err);
    }
}
async function respondToJob(jobId, action) {
    try {
        const res = await fetch(`${API_URL}/requests/${jobId}/respond`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ action })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Failed to respond.');
            return;
        }

        alert(action === 'accept' ? 'Job accepted!' : 'Job declined.');
        loadAvailableJobs();

    } catch (err) {
        console.error('Respond error:', err);
    }
}

// ── Availability toggle ────────────────────────────────────
let isAvailable = true;

function updateAvailUI() {
    const toggleEl = document.getElementById('avail-toggle');
    const labelEl  = document.getElementById('avail-label');
    if (!toggleEl || !labelEl) return;

    if (isAvailable) {
        toggleEl.classList.remove('off');
        labelEl.textContent = 'Available';
        labelEl.className   = 'avail-label on';
    } else {
        toggleEl.classList.add('off');
        labelEl.textContent = 'Unavailable';
        labelEl.className   = 'avail-label off';
    }
}

async function toggleAvail() {
    isAvailable = !isAvailable;
    updateAvailUI();

    try {
        await fetch(`${API_URL}/profiles/provider`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ isAvailable })
        });
    } catch (err) {
        console.error('Availability update error:', err);
    }
}