/**
 * login.js — Panoply
 * Handles role tab switching, password visibility, and login form submission.
 */

function setRole(btn) {
  document.querySelectorAll('.rtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function togglePw() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
}

async function handleLogin() {
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    showError('Please fill in all fields.');
    return;
  }

  // Get selected role from active tab
  const activeTab = document.querySelector('.rtab.active');
  const role = activeTab ? activeTab.textContent.toLowerCase().trim() : 'customer';

  // Fix: frontend says "artisan" but backend expects "provider"
  const mappedRole = role === 'artisan' ? 'provider' : role;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      showError(data.message || 'Login failed. Please try again.');
      return;
    }

    // Check role matches selected tab
    if (data.user.role !== mappedRole) {
      showError(`This account is not registered as a ${role}.`);
      return;
    }

    // Store token and user data
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Redirect based on role
    if (data.user.role === 'customer') {
      window.location.href = 'customer-dashboard.html';
    } else if (data.user.role === 'provider') {
      window.location.href = 'provider-dashboard.html';
    } else if (data.user.role === 'admin') {
      window.location.href = 'admin-dashboard.html';
    }

  } catch (error) {
    showError('Cannot connect to server. Please try again.');
    console.error('Login error:', error);
  }
}

function showError(message) {
  // Check if error element already exists
  let errorEl = document.getElementById('login-error');
  
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.id = 'login-error';
    errorEl.style.cssText = 'color: var(--red); font-size: 0.82rem; margin-top: 0.75rem; text-align: center;';
    document.querySelector('.btn-submit').after(errorEl);
  }

  errorEl.textContent = message;
}