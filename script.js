const users = [
    {username: "abiyyu", password: "abiyyu123"},
    {username: "nevan", password: "nevan123"}
];

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('remember');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        alert('Username dan password harus diisi');
        return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedUser', username);
        }

        localStorage.setItem('loggedUser', username);
        alert('Login berhasil!');
        window.location.href = 'dashboard.html';

    } else {
        alert('Username atau password salah');
        usernameInput.focus();
    }
});

window.addEventListener('load', function() {
    const savedUser = this.localStorage.getItem('savedUser');
    if (savedUser) {
        usernameInput.value = savedUser;
        rememberMeCheckbox.checked = true;
        passwordInput.focus();
    }
});

rememberMeCheckbox.addEventListener('change', function() {
    if (!this.checked) {
        localStorage.removeItem('savedUser');
    }
});
