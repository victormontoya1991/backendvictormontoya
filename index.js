const ProductManager = require("./class");

const addProduct = new ProductManager();

addProduct.addProduct({
    title: 'producto prueba',
    description: 'este es un producto de prueba',
    price: 2000,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25
});

addProduct.addProduct({
    title: 'producto prueba2',
    description: 'este es un producto de prueba2',
    price: 3000,
    thumbnail: 'sin imagen2',
    code: 'abc124',
    stock: 50
});

const productNew= addProduct.getProducts();
console.log(productNew);