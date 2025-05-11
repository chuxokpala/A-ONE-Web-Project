// Select the "All Products" link and product grid
const allProductsLink = document.getElementById('all-products-link');
const productGrid = document.getElementById('product-grid');

// Sample product data (replace with actual data or fetch from an API)
const products = [
    { name: "Inverter", image: "assets/Products - Inverter x1.png", price: "$200", description: "This is an inverter description." },
    { name: "Solar Panel", image: "assets/Products - PV Panel x1.png", price: "$300", description: "This is a solar panel description." },
    { name: "Battery", image: "assets/Products - Battery x1.png", price: "$150", description: "This is a battery description." },
    { name: "Street Light", image: "assets/Products - Street Light x1.png", price: "$100", description: "This is a street light description." },
    { name: "Electric Vehicle", image: "assets/Products - EV x1.png", price: "$500", description: "This is an electric vehicle description." },
    { name: "Borehole Panel", image: "assets/Products - Borehole Panel x1.png", price: "$250", description: "This is a borehole panel description." },
    { name: "Transformer", image: "assets/Products - Transformer x1.png", price: "$400", description: "This is a transformer description." },
    { name: "Accessories", image: "assets/Products - Accesories x1.png", price: "$50", description: "This is an accessories description." },
];

// console.log("JavaScript file loaded successfully!");

// Event listener for "All Products" click
allProductsLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Clear the product grid
    productGrid.innerHTML = '';

    // Populate the grid with product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="view-detail" style="background-color: blue; color: white;">View Detail</button> 
        `;

        // Add event listener for "View Detail" button
        const viewDetailButton = productCard.querySelector('.view-detail');
        viewDetailButton.addEventListener('click', () => {
            // Display product details (e.g., in a modal or alert)
            alert(`Product: ${product.name}\nDescription: ${product.description}`); 
        });

        productGrid.appendChild(productCard);
    });
});

