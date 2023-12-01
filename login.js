document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'starkenmanns@bzz.ch' && password === 'Absenz_ModulXY') {
        alert('Login successful');
        location.reload();
    } else {
        alert('Invalid username or password');
    }
});
