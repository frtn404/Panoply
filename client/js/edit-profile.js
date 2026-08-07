/**
 * edit-profile.js — Panoply
 * Handles toast notifications for the edit profile page.
 */

function showToast(message = 'Saved successfully') {
  const toast   = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}