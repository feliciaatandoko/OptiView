document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const phoneInput = document.getElementById('phone');
    const signUpButton = document.getElementById('sign-up-button');
  
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const phoneError = document.getElementById('phone-error');
  
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length < 5) {
            usernameError.textContent = "Username must be at least 5 characters.";
            usernameError.style.display = "block";
        } else {
            usernameError.style.display = "none";
        }
    });
  
    emailInput.addEventListener('input', () => {
        if (!emailInput.value.endsWith('@gmail.com')) {
            emailError.textContent = "Email must use the domain @gmail.com";
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    });

    phoneInput.addEventListener('input', () => {
        const phonePattern = /^\+?\d{10,15}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = "Phone number must be 10-15 digits, optionally starting with '+'.";
            phoneError.style.display = "block";
        } else {
            phoneError.style.display = "none";
        }
    });

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            passwordError.textContent =
                "Password must be at least 8 characters, include uppercase, lowercase, number, and a special character.";
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    });
  
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.style.display = "block";
        } else {
            confirmPasswordError.style.display = "none";
        }
    });
  
    signUpButton.addEventListener('click', (e) => {
        e.preventDefault();
      
        if (
            usernameError.style.display === "block" ||
            emailError.style.display === "block" ||
            passwordError.style.display === "block" ||
            confirmPasswordError.style.display === "block" ||
            phoneError.style.display === "block"
        ) {
            alert("Please fix the errors in the form before submitting.");
            return;
        }
      
        // Save user data
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({
            username: usernameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value
        });
        localStorage.setItem('users', JSON.stringify(users));
      
        // Redirect to Sign In page
        window.location.href = 'sign_in.html';
    });      
});
