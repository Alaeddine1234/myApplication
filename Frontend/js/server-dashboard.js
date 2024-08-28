// server-dashboard.js

// Fonction pour mettre à jour le statut d'une commande
function updateOrderStatus(orderId, status) {
    fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Statut de la commande mis à jour');
            window.location.reload();
        } else {
            alert('Erreur lors de la mise à jour du statut de la commande');
        }
    });
}

// Ajouter des écouteurs d'événements aux boutons "Prête" et "Servie"
document.querySelectorAll('.btn-action').forEach(button => {
    button.addEventListener('click', () => {
        const orderId = button.dataset.orderId;
        const status = button.dataset.status;
        updateOrderStatus(orderId, status);
    });
});
