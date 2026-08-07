/**
 * settings.js — Panoply
 * Handles settings tab switching, toggle pills, and toast notifications.
 */

// ── Tab switching ──────────────────────────────────────────
function switchTab(btn, tabId) {
  document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
}

// ── Toggle pills ───────────────────────────────────────────
function togglePill(el) {
  el.classList.toggle('on');
  // TODO: Persist preference via API — PATCH /api/users/preferences
}

// ── Toast ──────────────────────────────────────────────────
function showToast(message = 'Saved') {
  const toast    = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Confirm delete ─────────────────────────────────────────
function confirmDelete() {
  const confirmed = window.confirm(
    'Are you sure you want to permanently delete your account? This cannot be undone.'
  );
  if (confirmed) {
    // TODO: Call DELETE /api/users/me then redirect to index
    window.location.href = 'index.html';
  }
}