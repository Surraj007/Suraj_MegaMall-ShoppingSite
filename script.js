// Script to toggle visibility of payment details based on selected payment method
document.addEventListener("DOMContentLoaded", function() {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const cardDetails = document.querySelector('.card-details');
    const upiDetails = document.querySelector('.upi-details');
    const walletDetails = document.querySelector('.wallet-details');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            if (this.id === 'card-payment') {
                cardDetails.style.display = 'block';
                upiDetails.style.display = 'none';
                walletDetails.style.display = 'none';
            } else if (this.id === 'upi-payment') {
                cardDetails.style.display = 'none';
                upiDetails.style.display = 'block';
                walletDetails.style.display = 'none';
            } else if (this.id === 'wallet-payment') {
                cardDetails.style.display = 'none';
                upiDetails.style.display = 'none';
                walletDetails.style.display = 'block';
            }
        });
    });
});
