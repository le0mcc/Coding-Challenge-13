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
            listProduct.textContent = `${product.title} - $${product.price}`;
            productStore.appendChild(listProduct);
        });
    })
    .catch(error => {
        console.error('There was a propblem with the fetch operation:', error);
    });