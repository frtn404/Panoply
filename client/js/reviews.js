/**
 * reviews.js — Panoply
 * Loads real reviews and handles review submission.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';

let selectedStars = 0;
let pendingJobId  = null;

document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;

    // Populate sidebar
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarRole = document.getElementById('sidebar-role');
    const avatar      = document.getElementById('sidebar-avatar');

    if (sidebarName) sidebarName.textContent = user.fullName;
    if (sidebarRole) sidebarRole.textContent = user.role;
    if (avatar) {
        avatar.textContent = user.fullName.split(' ').map(n => n[0]).join('');
    }

    // Load reviews written by this user
    await loadMyReviews();

    // Load completed jobs that haven't been reviewed yet
    await loadPendingReview();
});

async function loadMyReviews() {
    const container = document.getElementById('my-reviews-list');
    if (!container) return;

    try {
        const res  = await fetch(`${API_URL}/reviews/mine`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok || data.reviews.length === 0) {
            container.innerHTML = '<p style="color:var(--muted2);padding:1rem 0">You haven\'t written any reviews yet.</p>';
            return;
        }

        // Update summary
        const total  = data.reviews.length;
        const avgRaw = data.reviews.reduce((sum, r) => sum + r.rating, 0) / total;
        const avg    = Math.round(avgRaw * 10) / 10;

        const bigNum   = document.getElementById('reviews-big-num');
        const revCount = document.getElementById('reviews-count');
        if (bigNum)   bigNum.textContent   = avg;
        if (revCount) revCount.textContent = `${total} review${total !== 1 ? 's' : ''} given`;

        container.innerHTML = data.reviews.map(r => `
            <div class="review-card-item">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar" style="background:var(--blue-dim);color:var(--blue)">
                            ${r.provider.fullName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <div class="reviewer-name">${r.provider.fullName}</div>
                            <div class="reviewer-date">${new Date(r.createdAt).toLocaleDateString()}</div>
                        </div>
                    </div>
                    <div class="review-stars">
                        ${Array.from({length: 5}, (_, i) => `
                            <svg viewBox="0 0 24 24" ${i >= r.rating ? 'style="fill:var(--bg3)"' : ''}>
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        `).join('')}
                    </div>
                </div>
                <p class="review-text">${r.comment || 'No comment left.'}</p>
                ${r.sentimentScore !== null ? `
                    <div class="review-job-tag">
                        Sentiment: ${r.sentimentScore > 0.1 ? '😊 Positive' : r.sentimentScore < -0.1 ? '😞 Negative' : '😐 Neutral'}
                    </div>` : ''}
            </div>
        `).join('');

    } catch (err) {
        console.error('Load reviews error:', err);
    }
}

async function loadPendingReview() {
    const writeSection = document.getElementById('write-review-section');
    if (!writeSection) return;

    try {
        const res  = await fetch(`${API_URL}/requests/my`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) return;

        // Find completed jobs without reviews
        const completed = data.serviceRequests.filter(j => j.status === 'completed');

        if (completed.length === 0) {
            writeSection.style.display = 'none';
            return;
        }

        // Use most recent completed job
        const job = completed[0];
        pendingJobId = job.id;

        const jobTitle = document.getElementById('pending-job-title');
        if (jobTitle) {
            jobTitle.textContent = `Rate your ${job.category} job — ${job.provider?.fullName || 'your provider'}.`;
        }

    } catch (err) {
        console.error('Load pending review error:', err);
    }
}

async function submitReview() {
    if (selectedStars === 0) {
        showToast('Please select a star rating.');
        return;
    }

    if (!pendingJobId) {
        showToast('No completed job to review.');
        return;
    }

    const comment = document.getElementById('review-comment')?.value.trim();

    try {
        const res = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                jobId:   String(pendingJobId),
                rating:  selectedStars,
                comment
            })
        });

        const data = await res.json();

        if (!res.ok) {
            showToast(data.message || 'Failed to submit review.');
            return;
        }

        showToast('Review submitted successfully.');

        // Reload reviews
        setTimeout(async () => {
            await loadMyReviews();
            const writeSection = document.getElementById('write-review-section');
            if (writeSection) writeSection.style.display = 'none';
        }, 1500);

    } catch (err) {
        showToast('Cannot connect to server.');
        console.error('Submit review error:', err);
    }
}

function setStars(n) {
    selectedStars = n;
    const stars = document.querySelectorAll('#star-picker svg');
    stars.forEach((star, i) => {
        star.classList.toggle('lit', i < n);
    });
}

function showToast(message = 'Done') {
    const toast    = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}