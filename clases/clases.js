export class Products {
  constructor(title, description, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

const product1 = new Products(
  "Brahma",
  "Lata de cerveza Rubia",
  760,
  "asdasd",
  true
);

console.log(product1.title);
