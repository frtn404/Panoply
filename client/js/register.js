/**
 * register.js — Panoply
 * Handles multi-step registration flow: role selection, step navigation,
 * artisan-specific fields, password validation, and form submission.
 */

let currentRole = 'customer';
let currentStep = 1;

const validators = {
    email:    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    phone:    (v) => /^(\+234|0)[789][01]\d{8}$/.test(v),
    password: (v) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(v),
    fullName: (v) => /^[a-zA-Z\s'-]{2,50}$/.test(v)
};

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
    // Validate before moving forward
    if (n > currentStep) {
        if (currentStep === 1 && !validateStep1()) return;
        if (currentStep === 2 && !validateStep2()) return;
    }

    document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('step' + n).classList.add('active');
    currentStep = n;
    updateStepBar(n);

    if (n === 2) {
        const artisanFields = document.querySelectorAll('.artisan-field');
        artisanFields.forEach(f => {
            f.style.display = currentRole === 'artisan' ? 'block' : 'none';
        });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep1() {
    // Step 1 is just role selection — always valid
    return true;
}

function validateStep2() {
    const fname = document.getElementById('fname')?.value.trim();
    const lname = document.getElementById('lname')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();

    if (!fname || !lname) {
        showFieldError('fname', 'Please enter your full name.');
        return false;
    }

    if (!validators.fullName(fname) || !validators.fullName(lname)) {
        showFieldError('fname', 'Name must contain only letters.');
        return false;
    }

    if (!email) {
        showFieldError('email', 'Email address is required.');
        return false;
    }

    if (!validators.email(email)) {
        showFieldError('email', 'Please enter a valid email address.');
        return false;
    }

    if (phone && !validators.phone(phone)) {
        showFieldError('phone', 'Enter a valid Nigerian number e.g. 08012345678');
        return false;
    }

    clearAllErrors();
    return true;
}

function showFieldError(fieldId, message) {
    clearAllErrors();
    const field = document.getElementById(fieldId);
    if (!field) return;

    const error = document.createElement('p');
    error.className = 'field-error';
    error.style.cssText = 'color:var(--red);font-size:0.78rem;margin-top:0.35rem';
    error.textContent = message;
    field.parentNode.appendChild(error);
    field.style.borderColor = 'var(--red)';
    field.focus();
}

function clearAllErrors() {
    document.querySelectorAll('.field-error').forEach(e => e.remove());
    document.querySelectorAll('input').forEach(i => i.style.borderColor = '');
}

function togglePw(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

async function handleSubmit() {
  const pw1   = document.getElementById('pw1').value;
  const pw2   = document.getElementById('pw2').value;
  const terms = document.getElementById('terms').checked;

  if (!pw1) {
    alert('Password is required.');
    return;
}

if (!validators.password(pw1)) {
    alert('Password must be at least 8 characters with one uppercase letter and one number.');
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

  // Collect form data
  const fullName = document.getElementById('fname').value.trim() + ' ' + document.getElementById('lname').value.trim();
  const email    = document.getElementById('email').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const state    = document.getElementById('state').value;
  const role     = currentRole === 'artisan' ? 'provider' : currentRole;

  // Provider trade category
  let tradeCategory = null;
  if (role === 'provider') {
    tradeCategory = document.getElementById('trade').value;
    if (!tradeCategory) {
      alert('Please select your trade category.');
      return;
    }
  }

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password: pw1,
        role,
        ...(tradeCategory && { tradeCategory }),
        state
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || 'Registration failed.');
      return;
    }

    // Store token and user
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Show success screen
    document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('step4').classList.add('active');
    document.getElementById('prog').style.width = '100%';
    document.querySelector('.stepbar').style.display = 'none';

    // Redirect after 2 seconds
    setTimeout(() => {
      if (data.user.role === 'provider') {
        window.location.href = 'provider-dashboard.html';
      } else {
        window.location.href = 'customer-dashboard.html';
      }
    }, 2000);

  } catch (error) {
    alert('Cannot connect to server. Please try again.');
    console.error('Registration error:', error);
  }
}