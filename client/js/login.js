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

function handleLogin() {
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // TODO: Replace with real API call to POST /api/auth/login
  alert('Login would connect to the Panoply API here.');
}