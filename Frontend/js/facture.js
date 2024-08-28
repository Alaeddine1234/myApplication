// facture.js

// Fonction pour imprimer la facture
function printInvoice() {
    window.print();
}

document.querySelector('.btn-print')?.addEventListener('click', printInvoice);
