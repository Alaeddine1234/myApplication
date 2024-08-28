// reset-password.js

// Fonction pour réinitialiser le mot de passe
function resetPassword(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    fetch('/api/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Lien de réinitialisation envoyé');
        } else {
            alert('Erreur lors de la réinitialisation du mot de passe');
        }
    });
}

document.querySelector('#reset-password-form')?.addEventListener('submit', resetPassword);
