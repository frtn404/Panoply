/**
 * profile.js — Panoply
 * Loads real user and profile data from the API.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';

document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;
    
    // Populate profile hero
    const profileName   = document.getElementById('profile-name');
    const profileEmail  = document.getElementById('profile-email');
    const profilePhone  = document.getElementById('profile-phone');
    const profileRole   = document.getElementById('profile-role-badge');
    const profileJoined = document.getElementById('profile-joined');

    if (profileName)  profileName.textContent  = user.fullName;
    if (profileEmail) profileEmail.textContent = user.email;
    if (profilePhone) profilePhone.textContent = user.phone || 'Not set';
    if (profileRole)  profileRole.textContent  = user.role;

    // Load profile specific data
    try {
        const endpoint = user.role === 'provider'
            ? `${API_URL}/profiles/provider/${user.id}`
            : `${API_URL}/profiles/customer/${user.id}`;

        const res  = await fetch(endpoint, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) return;

        const profile = data.profile;

        if (profileJoined) {
            profileJoined.textContent = new Date(profile.createdAt).toLocaleDateString('en-GB', {
                year: 'numeric', month: 'long'
            });
        }

        // Provider specific stats
        if (user.role === 'provider') {
            const statRating = document.getElementById('stat-rating');
            const statJobs   = document.getElementById('stat-jobs');
            const statCat    = document.getElementById('stat-category');

            if (statRating) statRating.textContent = profile.averageRating || '0';
            if (statJobs)   statJobs.textContent   = profile.completedJobsCount || '0';
            if (statCat)    statCat.textContent     = profile.category || 'Not set';
        }

        // Load recent jobs
        await loadRecentJobs();

    } catch (err) {
        console.error('Profile load error:', err);
    }
});

async function loadRecentJobs() {
    const container = document.getElementById('recent-jobs');
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

        // Show last 3 jobs
        const recent = data.serviceRequests.slice(0, 3);

        container.innerHTML = recent.map(j => `
            <div class="job-item">
                <div class="job-icon default">
                    <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div class="job-info">
                    <h4>${j.category}</h4>
                    <p>${new Date(j.createdAt).toLocaleDateString()} · ${j.status.replace('_', ' ')}</p>
                </div>
                <div class="job-status status-${j.status === 'completed' ? 'done' : j.status === 'cancelled' ? 'cancelled' : 'progress'}">
                    ${j.status.replace('_', ' ')}
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('Recent jobs error:', err);
    }
}