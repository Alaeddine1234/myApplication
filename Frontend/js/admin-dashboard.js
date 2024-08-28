// admin-dashboard.js

// Fonction pour ajouter un produit
function addProduct(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productPrice = document.getElementById('productPrice').value;

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: productName, category: productCategory, price: productPrice })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Produit ajouté');
            window.location.reload();
        } else {
            alert('Erreur lors de l\'ajout du produit');
        }
    });
}

document.querySelector('#addProductForm')?.addEventListener('submit', addProduct);
