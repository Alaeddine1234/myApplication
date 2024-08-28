// profile.js

// Fonction pour mettre à jour le profil
function updateProfile(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Profil mis à jour');
        } else {
            alert('Erreur lors de la mise à jour du profil');
        }
    });
}

document.querySelector('#profile-form')?.addEventListener('submit', updateProfile);
