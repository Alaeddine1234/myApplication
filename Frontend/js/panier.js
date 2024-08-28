// panier.js

// Fonction pour afficher le panier
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `Produit ID: ${item.id}, Quantité: ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.quantity * 10; // Exemple: prix fixe
    });

    document.getElementById('cart-total').textContent = `Total: €${total}`;
}

displayCart();
