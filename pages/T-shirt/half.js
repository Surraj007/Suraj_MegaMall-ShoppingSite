
//for cart
const cartCountElement = document.getElementById('cart-count');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Call this function when an item is added to the cart
function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Sample usage: add item to cart on button click
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

// Update the cart count on page load
updateCartCount();
