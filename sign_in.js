document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInButton = document.getElementById('sign-in-button');
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // Simulated registered users (Replace this with actual backend data)
    const registeredUsers = [
      { email: 'testuser@gmail.com', password: 'Test@1234' },
      { email: 'example@gmail.com', password: 'Example@1234' },
    ];
  
    // signInButton.addEventListener('click', (e) => {
    //   e.preventDefault();
  
    //   const email = emailInput.value;
    //   const password = passwordInput.value;
  
    //   // Validate email and password
    //   const user = registeredUsers.find(
    //     (user) => user.email === email && user.password === password
    //   );
  
    //   if (!user) {
    //     // Tampilkan pesan error jika tidak valid
    //     emailError.textContent = 'Invalid email or password.';
    //     emailError.style.display = 'block';
    //     passwordError.textContent = 'Invalid email or password.';
    //     passwordError.style.display = 'block';
    //   } else {
    //     // Jika valid, arahkan ke halaman lain
    //     alert('Login successful!');
    //     emailError.style.display = 'none';
    //     passwordError.style.display = 'none';
        
    //     // Redirect to Home Page
    //     window.location.href = 'homepage.html';
    //   }
    // });

    signInButton.addEventListener('click', (e) => {
      e.preventDefault(); // Mencegah default reload form
      
      // Langsung alihkan ke homepage
      alert('Login successful!');
      window.location.href = 'homepage.html';
  });
  
  });
  