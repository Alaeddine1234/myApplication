// paiement.js

// Fonction pour gérer le paiement
function handlePayment(event) {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === 'card') {
        // Logique pour le paiement par carte
        alert('Paiement par carte effectué avec succès');
        window.location.href = 'facture.html';
    } else {
        // Logique pour le paiement en espèces
        alert('Veuillez préparer le montant exact pour le paiement en espèces');
        window.location.href = 'facture.html';
    }
}

document.querySelectorAll('.btn-block').forEach(button => {
    button.addEventListener('click', handlePayment);
});
