//for cart
const cartCountElement = document.getElementById('cart-count');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;
    cart.forEach(item => {
        // Parse the price as a float
        total += parseFloat(item.price);
    });
    totalPriceElement.textContent = `Total: ₹${total.toFixed(2)}`;
}

//when an item is added to the cart
function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateTotalPrice();
}

//add item to cart on button click
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            name: button.parentElement.querySelector('h3').textContent,
            price: button.parentElement.querySelector('.price').textContent,
        };
        addToCart(item);
        alert(`${item.name} added to cart!`);
    });
});
updateCartCount();
updateTotalPrice();

document.getElementById('address-form').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'payment.html';
});