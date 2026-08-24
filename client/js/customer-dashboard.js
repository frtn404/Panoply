/**
 * customer-dashboard.js — Panoply
 * Loads real user data and service requests from the API.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) {
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;

    const firstName = user.fullName.split(' ')[0];

    // Populate user info
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarRole = document.getElementById('sidebar-role');
    const greeting    = document.getElementById('dashboard-greeting');
    const avatar      = document.getElementById('sidebar-avatar');

    if (sidebarName) sidebarName.textContent = user.fullName;
    if (sidebarRole) sidebarRole.textContent = user.role;
    if (greeting)    greeting.textContent    = firstName + '.';
    if (avatar) {
        avatar.textContent = user.fullName
            .split(' ')
            .map(n => n[0])
            .join('');
    }

    // Fetch real service requests
    try {
        const response = await fetch(`${API_URL}/requests/my`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Failed to load requests:', data.message);
            return;
        }

        const requests = data.serviceRequests;

        // Update stats
        const total     = requests.length;
        const active    = requests.filter(r => ['pending','assigning','accepted','in_progress'].includes(r.status)).length;
        const completed = requests.filter(r => r.status === 'completed').length;

        const totalEl     = document.getElementById('stat-total');
        const activeEl    = document.getElementById('stat-active');
        const completedEl = document.getElementById('stat-completed');

        if (totalEl)     totalEl.textContent     = total;
        if (activeEl)    activeEl.textContent     = active;
        if (completedEl) completedEl.textContent  = completed;

    } catch (error) {
        console.error('Dashboard error:', error);
    }
});