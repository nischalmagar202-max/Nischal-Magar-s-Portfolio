// Product array with names and prices
const products = [
    { name: 'Laptop', price: 899.99 },
    { name: 'Smartphone', price: 699.99 },
    { name: 'Wireless Headphones', price: 199.99 },
    { name: 'USB-C Cable', price: 19.99 },
    { name: 'Monitor', price: 349.99 },
    { name: 'Mechanical Keyboard', price: 149.99 },
    { name: 'Wireless Mouse', price: 79.99 },
    { name: 'Webcam', price: 89.99 },
    { name: 'USB Hub', price: 49.99 },
    { name: 'Phone Stand', price: 29.99 }
];

// Display current date
function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
}

// Display products using loop
function displayProducts() {
    const productListDiv = document.getElementById('productList');
    
    // Loop through products array and create cards
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        `;
        
        productListDiv.appendChild(productCard);
    }
}

// Calculate total price using control structure
function calculateTotalPrice() {
    let total = 0;
    
    // Using for loop to sum all prices
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    
    // Display total price
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = '$' + total.toFixed(2);
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    displayProducts();
    calculateTotalPrice();
});
