// client-dashboard.js

// Fonction pour ajouter un article au panier
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { id: productId, quantity: 1 };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produit ajouté au panier');
}

// Ajouter des écouteurs d'événements aux boutons "Ajouter au panier"
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
    });
});
