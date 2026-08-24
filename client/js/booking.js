/**
 * booking.js — Panoply
 * Handles the 4-step booking flow connected to the backend API.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';
function handleUnauthorized(data) {
  if (data.message === 'Invalid or expired token.') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  }
}
const state = {
  svc:       'Plumbing',
  title:     '',
  addr:      '',
  date:      '',
  urgency:   'Flexible',
  provider:  null,
  score:     '',
  provAvi:   '',
  provTrade: '',
  providerId: null
};

let currentStep = 1;

function goStep(n) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step' + n).classList.add('active');
  currentStep = n;

  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('sbar' + i);
    el.classList.remove('active', 'done');
    if (i < n) el.classList.add('done');
    if (i === n) el.classList.add('active');
  }

  const pct = n === 1 ? 25 : n === 2 ? 50 : n === 3 ? 75 : 100;
  document.getElementById('prog').style.width = pct + '%';

  if (n === 3) loadProviders();
  if (n === 4) fillReview();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectSvc(el, name) {
  document.querySelectorAll('.svc-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.svc = name;
  const sumSvc = document.getElementById('sum-svc');
  sumSvc.textContent = name;
  sumSvc.className = 'sum-val amber';
}

function setUrgency(btn, val) {
  document.querySelectorAll('.urgency-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.urgency = val;
}

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
    el.className = 'sum-val';
  } else {
    el.textContent = emptyText;
    el.className = 'sum-val empty';
  }
}

// ── Step 3: Load real providers from API ───────────────────
async function loadProviders() {
  const list = document.getElementById('providers-list');
  list.innerHTML = '<p style="color:var(--muted2);padding:1rem">Finding providers near you...</p>';

  // Use a default Lagos location if geolocation not available
  const lat = 6.4281;
  const lng = 3.4219;

  try {
    const res = await fetch(
      `${API_URL}/matching?category=${state.svc}&latitude=${lat}&longitude=${lng}`,
      { headers: { 'Authorization': `Bearer ${token}` } }
    );

    const data = await res.json();
    console.log('Matching response:', data);
    console.log('Category used:', state.svc);
    if (res.status === 401) {
  handleUnauthorized(data);
  return;
}


    if (!res.ok || data.providers.length === 0) {
      list.innerHTML = '<p style="color:var(--muted2);padding:1rem">No providers found nearby. Try a different category or location.</p>';
      return;
    }

    list.innerHTML = data.providers.map((p, i) => `
      <div class="provider-card ${i === 0 ? 'selected' : ''}"
           onclick="selectProvider(this, '${p.fullName}', '${p.category}', '${p.fullName.split(' ').map(n=>n[0]).join('')}', ${p.providerId})">
        <div class="pr-rank">${i + 1}</div>
        <div class="pr-avatar" style="background:var(--blue-dim);color:var(--blue)">
          ${p.fullName.split(' ').map(n => n[0]).join('')}
        </div>
        <div class="pr-info">
          <div class="pr-name">${p.fullName} ${i === 0 ? '<span class="pr-badge">Best match</span>' : ''}</div>
          <div class="pr-meta">${p.category} · ★ ${p.averageRating} · ${p.completedJobsCount} jobs · ${p.distanceKm} km away</div>
        </div>
        <div class="pr-score-wrap">
          <div class="pr-score">${p.score}</div>
          <div class="pr-score-label">score</div>
        </div>
      </div>
    `).join('');

    // Auto-select first provider
    const first = data.providers[0];
    state.provider   = first.fullName;
    state.score      = first.score;
    state.provAvi    = first.fullName.split(' ').map(n => n[0]).join('');
    state.provTrade  = first.category;
    state.providerId = first.providerId;
    document.getElementById('sum-provider').textContent = `${first.fullName} (${first.score})`;

  } catch (error) {
    list.innerHTML = '<p style="color:var(--red);padding:1rem">Failed to load providers.</p>';
    console.error('Provider load error:', error);
  }
}

function selectProvider(el, name, trade, avi, providerId) {
  document.querySelectorAll('.provider-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const score = el.querySelector('.pr-score').textContent;
  state.provider   = name;
  state.score      = score;
  state.provAvi    = avi;
  state.provTrade  = trade;
  state.providerId = providerId;
  document.getElementById('sum-provider').textContent = `${name} (${score})`;
}

function fillReview() {
  document.getElementById('rev-svc').textContent      = state.svc;
  document.getElementById('rev-title').textContent    = state.title || '—';
  document.getElementById('rev-addr').textContent     = state.addr  || '—';
  document.getElementById('rev-urgency').textContent  = state.urgency;
  document.getElementById('rev-provider').textContent = state.provider;
  document.getElementById('rev-score').textContent    = `${state.score} / 100`;

  const timeEl = document.getElementById('job-time');
  const dt = [state.date, timeEl?.value].filter(Boolean).join(' · ');
  document.getElementById('rev-dt').textContent = dt || '—';

  document.getElementById('suc-avi').textContent  = state.provAvi;
  document.getElementById('suc-name').textContent = state.provider;
}

// ── Step 4: Submit booking ─────────────────────────────────
async function handleSubmit() {
  if (!state.title || !state.addr || !state.date) {
    alert('Please fill in all job details.');
    goStep(2);
    return;
  }

  try {
    const res = await fetch(`${API_URL}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        category:      state.svc,
        description:   state.title,
        address:       state.addr,
        latitude:      6.4281,
        longitude:     3.4219,
        scheduledDate: new Date(state.date).toISOString(),
        urgency:       state.urgency.toLowerCase()
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || 'Booking failed.');
      return;
    }

    // If provider selected, have them respond
    if (state.providerId) {
      await fetch(`${API_URL}/requests/${data.serviceRequest.id}/respond`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ action: 'accept' })
      });
    }

    // Show success screen
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('step5').classList.add('active');
    document.getElementById('prog').style.width = '100%';

    setTimeout(() => {
      window.location.href = 'customer-dashboard.html';
    }, 3000);

  } catch (error) {
    alert('Cannot connect to server.');
    console.error('Booking error:', error);
  }
}