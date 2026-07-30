/**
 * booking.js — Panoply
 * Handles the 4-step booking flow:
 *   Step 1 — service category selection
 *   Step 2 — job details form with live summary updates
 *   Step 3 — provider selection from ranked match list
 *   Step 4 — review and confirm booking
 */

// ── Booking state ──────────────────────────────────────────
const state = {
  svc:       'Plumbing',
  title:     '',
  addr:      '',
  date:      '',
  urgency:   'Flexible',
  provider:  'Tunde Jimoh',
  score:     '92',
  provAvi:   'TJ',
  provTrade: 'Electrician · ★ 4.8 · 1.2 km away',
};

let currentStep = 1;

// ── Step navigation ────────────────────────────────────────
function goStep(n) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step' + n).classList.add('active');
  currentStep = n;

  // Update step bar
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('sbar' + i);
    el.classList.remove('active', 'done');
    if (i < n) el.classList.add('done');
    if (i === n) el.classList.add('active');
  }

  // Update progress bar
  const pct = n === 1 ? 25 : n === 2 ? 50 : n === 3 ? 75 : 100;
  document.getElementById('prog').style.width = pct + '%';

  if (n === 4) fillReview();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Step 1: Service selection ──────────────────────────────
function selectSvc(el, name) {
  document.querySelectorAll('.svc-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.svc = name;

  const sumSvc = document.getElementById('sum-svc');
  sumSvc.textContent = name;
  sumSvc.className   = 'sum-val amber';
}

// ── Step 2: Urgency selection ──────────────────────────────
function setUrgency(btn, val) {
  document.querySelectorAll('.urgency-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.urgency = val;
}

// ── Step 2: Live summary update ────────────────────────────
function updateSummary() {
  const title = document.getElementById('job-title').value.trim();
  const addr  = document.getElementById('job-addr').value.trim();
  const date  = document.getElementById('job-date').value;

  state.title = title;
  state.addr  = addr;
  state.date  = date;

  setSummaryField('sum-title', title, 'Not entered yet');
  setSummaryField('sum-addr',  addr,  'Not entered yet');
  setSummaryField('sum-date',  date,  'Not selected');
}

function setSummaryField(id, value, emptyText) {
  const el = document.getElementById(id);
  if (value) {
    el.textContent = value;
    el.className   = 'sum-val';
  } else {
    el.textContent = emptyText;
    el.className   = 'sum-val empty';
  }
}

// ── Step 3: Provider selection ─────────────────────────────
function selectProvider(el, name, trade, avi) {
  document.querySelectorAll('.provider-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');

  const score = el.querySelector('.pr-score').textContent;
  state.provider  = name;
  state.score     = score;
  state.provAvi   = avi;
  state.provTrade = trade;

  document.getElementById('sum-provider').textContent = `${name} (${score})`;
}

// ── Step 4: Populate review card ───────────────────────────
function fillReview() {
  document.getElementById('rev-svc').textContent      = state.svc;
  document.getElementById('rev-title').textContent    = state.title    || '—';
  document.getElementById('rev-addr').textContent     = state.addr     || '—';
  document.getElementById('rev-urgency').textContent  = state.urgency;
  document.getElementById('rev-provider').textContent = state.provider;
  document.getElementById('rev-score').textContent    = `${state.score} / 100`;

  const timeEl = document.getElementById('job-time');
  const dt = [state.date, timeEl?.value].filter(Boolean).join(' · ');
  document.getElementById('rev-dt').textContent = dt || '—';

  // Success screen provider info
  document.getElementById('suc-avi').textContent   = state.provAvi;
  document.getElementById('suc-name').textContent  = state.provider;
}