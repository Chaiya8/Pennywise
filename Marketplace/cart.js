// cart.js
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    const product = getProductById(productId);

    if (product) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
        });
        console.log(`${product.name} added to cart!`);
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}

// Function to get product details by ID
function getProductById(productId) {

    return products.find(product => product.id === productId);
}

// Function to display the cart items in the cart.html page
function displayCart() {
   
    console.log("Cart items:", cart);
}
