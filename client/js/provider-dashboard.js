/**
 * provider-dashboard.js — Panoply
 * Handles the job request countdown timer and availability toggle.
 */

// ── Countdown timer for incoming job request ───────────────
let secondsRemaining = 278;

function tick() {
  if (secondsRemaining <= 0) {
    document.getElementById('timer').textContent = '00:00';
    return;
  }

  secondsRemaining--;

  const minutes = Math.floor(secondsRemaining / 60).toString().padStart(2, '0');
  const seconds = (secondsRemaining % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;

  setTimeout(tick, 1000);
}

tick();

// ── Availability toggle ────────────────────────────────────
let isAvailable = true;

function toggleAvail() {
  isAvailable = !isAvailable;

  const toggleEl = document.getElementById('avail-toggle');
  const labelEl  = document.getElementById('avail-label');

  if (isAvailable) {
    toggleEl.classList.remove('off');
    labelEl.textContent  = 'Available';
    labelEl.className    = 'avail-label on';
  } else {
    toggleEl.classList.add('off');
    labelEl.textContent  = 'Unavailable';
    labelEl.className    = 'avail-label off';
  }

  // TODO: Sync availability status with API — PATCH /api/providers/availability
}