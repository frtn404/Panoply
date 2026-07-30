/**
 * register.js — Panoply
 * Handles multi-step registration flow: role selection, step navigation,
 * artisan-specific fields, password validation, and form submission.
 */

let currentRole = 'customer';
let currentStep = 1;

function selectRole(el, role) {
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  currentRole = role;
}

function updateStepBar(step) {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('sbar' + i);
    el.classList.remove('active', 'done');
    if (i < step) el.classList.add('done');
    if (i === step) el.classList.add('active');
  }
  const pct = step === 1 ? 33 : step === 2 ? 66 : 100;
  document.getElementById('prog').style.width = pct + '%';
}

function goStep(n) {
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step' + n).classList.add('active');
  currentStep = n;
  updateStepBar(n);

  // Show trade field only for artisans on step 2
  if (n === 2) {
    const artisanFields = document.querySelectorAll('.artisan-field');
    artisanFields.forEach(f => {
      f.style.display = currentRole === 'artisan' ? 'block' : 'none';
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function togglePw(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

function handleSubmit() {
  const pw1   = document.getElementById('pw1').value;
  const pw2   = document.getElementById('pw2').value;
  const terms = document.getElementById('terms').checked;

  if (!pw1 || pw1.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }
  if (pw1 !== pw2) {
    alert('Passwords do not match.');
    return;
  }
  if (!terms) {
    alert('Please accept the terms to continue.');
    return;
  }

  // Show success screen
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step4').classList.add('active');
  document.getElementById('prog').style.width = '100%';
  document.querySelector('.stepbar').style.display = 'none';

  // TODO: Replace with real API call to POST /api/auth/register
}