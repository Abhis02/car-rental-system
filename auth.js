// Sign Up Form Validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // If validation passes, show a success message (or send data to server)
    alert('Sign up successful!');
    // Here you can send the data to your server with AJAX or redirect the user
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Perform login logic (you can send these details to your server via AJAX)
    console.log('Logging in with:', email, password);
    
    alert('Login successful!');
    // On successful login, redirect the user or perform additional actions
});
