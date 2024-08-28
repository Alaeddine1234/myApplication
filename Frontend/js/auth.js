// auth.js

// Fonction pour gérer l'inscription
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoyer les données d'inscription au backend
    // Exemple de code fetch :
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'login.html';
        } else {
            alert('Erreur lors de l\'inscription');
        }
    });
}

// Fonction pour gérer la connexion
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoyer les données de connexion au backend
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'client-dashboard.html'; // Rediriger vers la page appropriée
        } else {
            alert('Erreur de connexion');
        }
    });
}

document.querySelector('#signup-form')?.addEventListener('submit', handleSignup);
document.querySelector('#login-form')?.addEventListener('submit', handleLogin);
