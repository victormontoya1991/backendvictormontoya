const ProductManager = require("./class/ProductManager");

const product = new ProductManager();

//Verifica la construccion del producto
product.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin Imagen',
    code: 'abc123',
    stock: 25
});

//Verifica que se crea incrementando un nuevo ID
product.addProduct({
    title: 'producto prueba 2',
    description: 'Este es un producto prueba 2',
    price: 300,
    thumbnail: 'Sin Imagen 2',
    code: 'abc1232',
    stock: 25
});

//Verifica que todos los campos esten completos
product.addProduct({
    title: 'producto prueba 2',
    description: 'Este es un producto prueba 2',
    // price: 300,
    thumbnail: 'Sin Imagen 2',
    code: 'abc124',
    // stock: 25
});

const newProducts = product.getProducts();
console.log(newProducts);