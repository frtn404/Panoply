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
  // Populate sidebar
const sidebarName = document.getElementById('sidebar-name');
const sidebarRole = document.getElementById('sidebar-role');
const avatar      = document.getElementById('sidebar-avatar');

if (sidebarName) sidebarName.textContent = user.fullName;
if (sidebarRole) sidebarRole.textContent = user.role;
if (avatar) {
    avatar.textContent = user.fullName.split(' ').map(n => n[0]).join('');
}
    await loadJobs();
});

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
        <div class="history-card" data-status="${j.status}" data-title="${j.category}">
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