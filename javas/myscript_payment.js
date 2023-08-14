//Payment page

 function validateCardNumber(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/\D/g, '');

    // Limit input to 16 characters
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16);
    }
}

function validateCVC(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/\D/g, '');

    // Limit input to 3 characters
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const storeButton = document.getElementById('storeCardNumber');

    storeButton.addEventListener('click', function() {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvc = document.getElementById('cvc').value;
        const nameOnCard = document.getElementById('nameOnCard').value;

        if (!cardNumber || !expiryDate || !cvc || !nameOnCard) {
            alert('Please enter all card details.');
            return;
        }

        // Save data to local storage
        localStorage.setItem('cardNumber', cardNumber);
        localStorage.setItem('expiryDate', expiryDate);
        localStorage.setItem('cvc', cvc);
        localStorage.setItem('nameOnCard', nameOnCard);

        // Display saved data in console
        console.log('Payment details saved:');
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVC:', cvc);
        console.log('Name on Card:', nameOnCard);
    });
});
