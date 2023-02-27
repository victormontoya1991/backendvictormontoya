class ProductManager {
    #id = 0;
    #products = [];
    constructor() {
        this.#products = [];
    }
    addProduct(product) {
        // Verificar que el codigo no este repetido y que todos los campos esten completos
        if (this.#products.some(p => p.code === product.code)) {
            console.log('El código del producto ya existe');
            return;
        }
        // Verificar que no le faltan datos al nuevo producto
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log('Faltan datos del producto');
            return;
        }
        // Agregar el producto con un ID autoincrementable
        const newProduct = {...product, id: ++this.#id};
        this.#products.push(newProduct);
    }
    // Verificar que el producto se encuentre
    getProductById(id) {
        const product = this.#products.find(p => p.id === id);
        if (!product) {
            console.log('Producto no encontrado');
        }
        return item;
    }
    // Retorno del contructor
    getProducts() {
        return this.#products;
    }
}

module.exports = ProductManager;
