class ProductsManager {
  constructor() {
    this.products = [];
    this.idGenerator = new IDGenerator();
  }

  getProducts() {
    console.log(this.products);
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(`Completar todos los campos.`);
    }
    if (!this.products.some((p) => p.code === code)) {
      let newProduct = {
        id: this.idGenerator.generateID(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      console.log(`El producto ${title} fue agregado correctamente. `);
    } else {
      console.log(`Ya existe un producto con el mismo codigo ${code} `);
    }
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      console.log("Producto encontrado:", product);
    } else {
      console.log(`No existe ningún producto con el ID ${id}.`);
    }
  }
}

//Genero el id
class IDGenerator {
  constructor() {
    this.counter = 1;
  }

  generateID() {
    const id = this.counter;
    this.counter += 1;
    return id;
  }
}

const product = new ProductsManager();

product.addProduct(
  "Brahma",
  "Lata de cerveza Rubia",
  760,
  "ruta",
  "ACH001",
  20
);
product.addProduct("Corona", "Porron cerveza rubia", 850, "ruta", "ACH002", 15);

product.getProducts();

product.getProductById(1);
product.getProductById(3);
