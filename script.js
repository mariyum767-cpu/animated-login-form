const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

/* --- 1. Form Switching Logic --- */
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

/* --- 2. Login Form Logic --- */
const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    if (username === "" || password === "") {
        Swal.fire('Error', 'Please fill all fields!', 'error'); // Agar SweetAlert use karna ho
        alert("Please fill all login fields!");
    } else {
        console.log("Login details:", { username, password });
        alert("Login Successful! Welcome back.");
        // window.location.href = "dashboard.html"; 
    }
});

/* --- 3. Registration Form Logic --- */
const registerForm = document.querySelector('.form-box.register form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[type="password"]').value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill all registration fields!");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
    } else {
        alert("Registration Successful! Redirecting to Login...");
        
        // Form clear karne ke liye
        registerForm.reset();
        
        // User ko wapis login par bhejne ke liye animation
        container.classList.remove('active'); 
    }
});