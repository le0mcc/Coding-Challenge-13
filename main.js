// Task 2: Fetch Products form the API Using Fetch and Promises
const productStore = document.getElementById('productStore');
// Fetch data from the JavaScript Store Products AAPI
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network did not respond.')
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            const listProduct = document.createElement('li');
            listProduct.innerHTML = `Company Name: ${product.fields.company}<br />Product Price: $${product.fields.price}<br />Product Name: ${product.fields.name}`;
            productStore.appendChild(listProduct);
            const image = document.createElement('img');
            image.src = product.fields.image[0].thumbnails.small.url
            image.height = 200;
            productStore.appendChild(image);
        });
    })
    .catch(error => {
        console.error("Failed to load product. We're sorry for any inconvenience.", error);
    });