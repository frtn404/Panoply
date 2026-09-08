/**
 * admin-dashboard.js — Panoply
 * Loads real platform stats, pending providers,
 * and demand forecast from the API.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';
if (user && user.role !== 'admin') window.location.href = 'login.html';

document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;

    const sidebarName = document.getElementById('sidebar-name');
    if (sidebarName) sidebarName.textContent = user.fullName;

    await Promise.all([
        loadStats(),
        loadPendingProviders(),
        loadDemandForecast()
    ]);
});

async function loadStats() {
    try {
        const res  = await fetch(`${API_URL}/admin/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) return;

        const fields = {
            'stat-users':     data.totalUsers,
            'stat-providers': data.totalProviders,
            'stat-jobs':      data.totalJobs,
            'stat-pending':   data.pendingProviders,
            'stat-disputes':  data.openDisputes
        };

        Object.entries(fields).forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        });

    } catch (err) {
        console.error('Stats error:', err);
    }
}

async function loadPendingProviders() {
    const container = document.getElementById('pending-providers');
    if (!container) return;

    try {
        const res  = await fetch(`${API_URL}/admin/providers/pending`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok || data.providers.length === 0) {
            container.innerHTML = '<p style="color:var(--muted2);padding:1rem">No providers awaiting verification.</p>';
            return;
        }

        container.innerHTML = data.providers.map(p => `
            <div class="provider-row-item">
                <div class="p-avi" style="background:var(--amber-dim);color:var(--amber)">
                    ${p.fullName.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="p-info">
                    <h4>${p.fullName}</h4>
                    <p>${p.email} · Registered ${new Date(p.createdAt).toLocaleDateString()}</p>
                </div>
                <div class="p-status p-pending">Pending</div>
                <div class="p-actions">
                    <button class="p-btn approve" onclick="verifyProvider(${p.id}, this)">Approve</button>
                    <button class="p-btn suspend" onclick="suspendUser(${p.id}, this)">Reject</button>
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('Pending providers error:', err);
    }
}

async function verifyProvider(id, btn) {
    try {
        const res = await fetch(`${API_URL}/admin/providers/${id}/verify`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
            btn.closest('.provider-row-item').remove();
            showToast('Provider approved successfully.');
        }
    } catch (err) {
        console.error('Verify error:', err);
    }
}

async function suspendUser(id, btn) {
    try {
        const res = await fetch(`${API_URL}/admin/users/${id}/suspend`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
            btn.closest('.provider-row-item').remove();
            showToast('User suspended.');
        }
    } catch (err) {
        console.error('Suspend error:', err);
    }
}

async function loadDemandForecast() {
    const container = document.getElementById('demand-forecast');
    if (!container) return;

    try {
        const res  = await fetch(`${API_URL}/admin/demand-forecast`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) return;

        container.innerHTML = data.forecasts.map(f => `
            <div class="setting-row" style="margin-bottom:0.5rem">
                <div class="setting-info">
                    <h4>${f.category}</h4>
                    <p>${f.message}</p>
                </div>
                <div class="job-status status-${f.level === 'high' ? 'progress' : f.level === 'medium' ? 'pending' : 'done'}">
                    ${f.level} · ${Math.round(f.probability * 100)}%
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('Demand forecast error:', err);
    }
}

function showToast(message) {
    const toast    = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}