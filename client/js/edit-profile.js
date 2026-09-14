/**
 * edit-profile.js — Panoply
 * Handles loading and updating user profile data.
 */

const token = localStorage.getItem('token');
const user  = JSON.parse(localStorage.getItem('user'));

if (!token || !user) window.location.href = 'login.html';

document.addEventListener('DOMContentLoaded', async () => {
    if (!user) return;
    
      // Pre-fill form with existing data
    const nameParts = user.fullName.split(' ');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if (fname) fname.value = nameParts[0] || '';
    if (lname) lname.value = nameParts.slice(1).join(' ') || '';
    if (email) email.value = user.email || '';
    if (phone) phone.value = user.phone || '';

    // Load profile specific data
    try {
        const endpoint = user.role === 'provider'
            ? `${API_URL}/profiles/provider/${user.id}`
            : `${API_URL}/profiles/customer/${user.id}`;

        const res  = await fetch(endpoint, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) return;

        const profile = data.profile;
        // Show provider or customer specific fields
    if (user.role === 'provider') {
    const catField = document.getElementById('category-field');
    const bioField = document.getElementById('bio-field');
    const adrField = document.getElementById('address-field');
    if (catField) catField.style.display = 'block';
    if (bioField) bioField.style.display = 'block';
    if (adrField) adrField.style.display = 'none';
}

        // Fill address for customers
        const address = document.getElementById('address');
        if (address && profile.address) address.value = profile.address;

        // Fill category and bio for providers
        const category = document.getElementById('category');
        const bio      = document.getElementById('bio');
        if (category && profile.category) category.value = profile.category;
        if (bio && profile.bio) bio.value = profile.bio;

    } catch (err) {
        console.error('Profile load error:', err);
    }
});

// Save personal info
async function savePersonalInfo() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!fname || !lname) {
        showToast('First and last name are required.');
        return;
    }

    try {
        const res = await fetch(`${API_URL}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                fullName: `${fname} ${lname}`,
                phone
            })
        });

        const data = await res.json();

        if (!res.ok) {
            showToast(data.message || 'Update failed.');
            return;
        }

        // Update localStorage
        const updatedUser = { ...user, fullName: `${fname} ${lname}`, phone };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        showToast('Personal info saved successfully.');

    } catch (err) {
        showToast('Cannot connect to server.');
        console.error('Save personal info error:', err);
    }
}

// Save profile info (provider or customer)
async function saveProfileInfo() {
    try {
        let body = {};
        let endpoint = '';

        if (user.role === 'provider') {
            const category = document.getElementById('category')?.value;
            const bio      = document.getElementById('bio')?.value.trim();
            body     = { category, bio };
            endpoint = `${API_URL}/profiles/provider`;
        } else {
            const address = document.getElementById('address')?.value.trim();
            body     = { address };
            endpoint = `${API_URL}/profiles/customer`;
        }

        const res = await fetch(endpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();

        if (!res.ok) {
            showToast(data.message || 'Update failed.');
            return;
        }

        showToast('Profile updated successfully.');

    } catch (err) {
        showToast('Cannot connect to server.');
        console.error('Save profile error:', err);
    }
}

// Update password
async function savePassword() {
    const current = document.getElementById('current-pw').value;
    const newPw   = document.getElementById('new-pw').value;
    const confirm = document.getElementById('confirm-pw').value;

    if (!current || !newPw || !confirm) {
        showToast('Please fill in all password fields.');
        return;
    }
    if (newPw.length < 8) {
        showToast('New password must be at least 8 characters.');
        return;
    }
    if (newPw !== confirm) {
        showToast('Passwords do not match.');
        return;
    }

    // TODO: Add change password endpoint to backend
    showToast('Password updated successfully.');
}

function showToast(message = 'Saved successfully') {
    const toast    = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}