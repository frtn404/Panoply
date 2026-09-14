/**
 * sidebar.js — Panoply
 * Shared sidebar logic for all dashboard pages.
 */

function initSidebar() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;

    // Populate user info
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarRole = document.getElementById('sidebar-role');
    const avatar      = document.getElementById('sidebar-avatar');

    if (sidebarName) sidebarName.textContent = user.fullName;
    if (sidebarRole) sidebarRole.textContent = user.role;
    if (avatar) {
        avatar.textContent = user.fullName
            .split(' ')
            .map(n => n[0])
            .join('');
    }

    // Fix dashboard link based on role
    const dashLink = document.getElementById('dashboard-link');
    if (dashLink) {
        dashLink.href = user.role === 'provider'
            ? 'provider-dashboard.html'
            : user.role === 'admin'
            ? 'admin-dashboard.html'
            : 'customer-dashboard.html';
    }

    // Show role-specific nav items
    const customerNav    = document.getElementById('customer-nav-items');
    const providerNav    = document.getElementById('provider-nav-items');
    const customerTopbar = document.getElementById('customer-topbar-action');
    const providerTopbar = document.getElementById('provider-topbar-action');

    if (user.role === 'provider') {
        if (customerNav)    customerNav.style.display    = 'none';
        if (providerNav)    providerNav.style.display    = 'contents';
        if (customerTopbar) customerTopbar.style.display = 'none';
        if (providerTopbar) providerTopbar.style.display = 'flex';
    }
}
function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/client/login.html';
}

initSidebar();