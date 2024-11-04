// Task 2: Fetch Products form the API Using Fetch and Promises
const productStore = document.getElementById('productStore');
// Fetch data from the JavaScript Store Products AAPI
fetch('https://www.course-api.com/javascript-store-products')
    // Throw an error if the network did not respond
    .then(response => {
        if (!response.ok) {
            throw new Error('Network did not respond.')
        };
        // Return response as a JSON
        return response.json();
    })
    // Task 3: Display Product Details Dynamically
    .then(products => {
        // Display each product's company name, product price, product name, and image.
        products.forEach(product => {
            const listProduct = document.createElement('li');
            listProduct.innerHTML = `Company Name: ${product.fields.company}<br />Product Price: $${product.fields.price}<br />Product Name: ${product.fields.name}`;
            // Append the product to the list
            productStore.appendChild(listProduct);
            // Display the image in the webpage
            const image = document.createElement('img');
            image.src = product.fields.image[0].thumbnails.small.url
            image.height = 200;
            productStore.appendChild(image);
        });
    })
    // Task 4: Handle Errors Gracefully
    .catch(error => {
        // Console log and alert when the webpage fails to load.
        console.error("Failed to load product. We're sorry for any inconvenience.", error);
        alert("Failed to load products. Please try again later.")
    });