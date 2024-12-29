// document.addEventListener('DOMContentLoaded', () => {
//   const usernameInput = document.getElementById('username');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');
//   const confirmPasswordInput = document.getElementById('confirm-password');
//   const signUpButton = document.getElementById('sign-up-button');

//   const usernameError = document.getElementById('username-error');
//   const emailError = document.getElementById('email-error');
//   const passwordError = document.getElementById('password-error');
//   const confirmPasswordError = document.getElementById('confirm-password-error');

//   // Validate username input
//   usernameInput.addEventListener('input', () => {
//     if (usernameInput.value.length < 5) {
//       usernameError.textContent = "Username must be at least 5 characters.";
//       usernameError.style.display = "block";
//     } else {
//       usernameError.style.display = "none";
//     }
//   });

//   // Validate email input
//   emailInput.addEventListener('input', () => {
//     if (!emailInput.value.endsWith('@gmail.com')) {
//       emailError.textContent = "Email must use the domain @gmail.com";
//       emailError.style.display = "block";
//     } else {
//       emailError.style.display = "none";
//     }
//   });

//   // Validate password input
//   passwordInput.addEventListener('input', () => {
//     const password = passwordInput.value;
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
//     if (!regex.test(password)) {
//       passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, number, and a special character.";
//       passwordError.style.display = "block";
//     } else {
//       passwordError.style.display = "none";
//     }
//   });

//   // Validate confirm password input
//   confirmPasswordInput.addEventListener('input', () => {
//     if (confirmPasswordInput.value !== passwordInput.value) {
//       confirmPasswordError.textContent = "Passwords do not match.";
//       confirmPasswordError.style.display = "block";
//     } else {
//       confirmPasswordError.style.display = "none";
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.querySelector('.sign-up-form');

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (password !== confirmPassword) {
      const confirmPasswordError = document.getElementById('confirm-password-error');
      confirmPasswordError.textContent = 'Password tidak cocok!';
      confirmPasswordError.style.display = 'block';
      return;
    }

    const requestData = {
      username: username,
      email: email,
      pass: password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('Sign-up berhasil! Anda akan dialihkan ke halaman Account.');
        window.location.href = 'account.html';
      } else {
        alert('Gagal melakukan sign-up: ' + (result.message || 'Terjadi kesalahan.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan jaringan atau server. Coba lagi nanti.');
    }
  });
});