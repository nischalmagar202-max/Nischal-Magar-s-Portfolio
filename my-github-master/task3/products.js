// Array storing product names and prices
const products = [
    { name: 'Laptop', price: 899.99 },
    { name: 'Smartphone', price: 699.99 },
    { name: 'Headphones', price: 199.99 },
    { name: 'USB Cable', price: 19.99 },
    { name: 'Monitor', price: 349.99 },
    { name: 'Keyboard', price: 149.99 },
    { name: 'Mouse', price: 79.99 },
    { name: 'Webcam', price: 89.99 },
    { name: 'USB Hub', price: 49.99 },
    { name: 'Phone Stand', price: 29.99 }
];

// Display current date using Date object
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

// Display products using JavaScript loop
function displayProducts() {
    const productListDiv = document.getElementById('productList');
    
    // Using for loop to iterate through products array
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        // Create product card element
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Add product name and price
        productCard.innerHTML = 
            '<div class="product-name">' + product.name + '</div>' +
            '<div class="product-price">Rs. ' + product.price.toFixed(2) + '</div>';
        
        // Append to product list
        productListDiv.appendChild(productCard);
    }
}

// Calculate total price using control structure (for loop)
function calculateTotalPrice() {
    let total = 0;
    
    // Using for loop to sum all prices
    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price;
    }
    
    // Display total price
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = 'Rs. ' + total.toFixed(2);
}

// Initialize when page loads
window.onload = function() {
    displayCurrentDate();
    displayProducts();
    calculateTotalPrice();
};