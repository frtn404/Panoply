/**
 * reviews.js — Panoply
 * Handles interactive star picker and review submission toast.
 */

let selectedStars = 0;

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