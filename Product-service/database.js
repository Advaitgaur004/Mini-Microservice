const Database = require('better-sqlite3');

const db = new Database('products.db');

// Initialize table
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  )
`);

module.exports = {
  getProducts: () => db.prepare('SELECT * FROM products').all(),
  addProduct: (product) => 
    db.prepare('INSERT INTO products (name, price) VALUES (?, ?)')
      .run(product.name, product.price)
};
