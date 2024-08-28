// order-history.js

// Fonction pour charger l'historique des commandes depuis le backend
function loadOrderHistory() {
    fetch('/api/orders')  // Remplacer par l'URL réelle de votre API backend
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayOrders(data.orders);
            } else {
                alert('Erreur lors du chargement de l\'historique des commandes');
            }
        })
        .catch(error => console.error('Erreur:', error));
}

// Fonction pour afficher les commandes sur la page
function displayOrders(orders) {
    const ordersTableBody = document.querySelector('#orders-table tbody');
    ordersTableBody.innerHTML = '';  // Clear existing content

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.tableNumber}</td>
            <td>${order.details}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
        `;
        ordersTableBody.appendChild(row);
    });
}

// Fonction pour filtrer les commandes par statut
function filterOrdersByStatus(status) {
    fetch(`/api/orders?status=${status}`)  // Remplacer par l'URL réelle de votre API backend avec paramètre de statut
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayOrders(data.orders);
            } else {
                alert('Erreur lors du filtrage des commandes');
            }
        })
        .catch(error => console.error('Erreur:', error));
}

// Fonction pour filtrer les commandes par date
function filterOrdersByDate(date) {
    fetch(`/api/orders?date=${date}`)  // Remplacer par l'URL réelle de votre API backend avec paramètre de date
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayOrders(data.orders);
            } else {
                alert('Erreur lors du filtrage des commandes');
            }
        })
        .catch(error => console.error('Erreur:', error));
}

// Initialiser l'historique des commandes au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadOrderHistory();

    // Ajouter des écouteurs d'événements pour les filtres
    document.querySelector('#filter-status')?.addEventListener('change', (event) => {
        const status = event.target.value;
        filterOrdersByStatus(status);
    });

    document.querySelector('#filter-date')?.addEventListener('change', (event) => {
        const date = event.target.value;
        filterOrdersByDate(date);
    });
});
