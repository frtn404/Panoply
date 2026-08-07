/**
 * booking-history.js — Panoply
 * Handles filter tabs and search for booking history list.
 */

let activeFilter = 'all';

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
  const cards = document.querySelectorAll('#history-list .history-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const statusMatch = activeFilter === 'all' || card.dataset.status === activeFilter;
    const titleMatch  = !query || card.dataset.title.toLowerCase().includes(query);
    const visible     = statusMatch && titleMatch;
    card.style.display = visible ? 'flex' : 'none';
    if (visible) visibleCount++;
  });

  // Show empty state if nothing matches
  let emptyEl = document.getElementById('history-empty');
  if (visibleCount === 0) {
    if (!emptyEl) {
      emptyEl = document.createElement('div');
      emptyEl.id = 'history-empty';
      emptyEl.className = 'history-empty';
      emptyEl.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <p>No jobs match this filter.</p>`;
      document.getElementById('history-list').after(emptyEl);
    }
    emptyEl.style.display = 'block';
  } else if (emptyEl) {
    emptyEl.style.display = 'none';
  }
}