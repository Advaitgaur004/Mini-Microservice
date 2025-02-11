const Database = require('better-sqlite3');
const db = new Database('inventory.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS inventory (
    product_id INTEGER PRIMARY KEY,
    quantity INTEGER
  )
`);

// Add test data if empty
const count = db.prepare('SELECT COUNT(*) as count FROM inventory').get();
if (count.count === 0) {
  db.prepare('INSERT INTO inventory (product_id, quantity) VALUES (?, ?)')
    .run(1, 100);
}

module.exports = {
  getInventory: () => db.prepare('SELECT * FROM inventory').all(),
  updateStock: (id, quantity) =>
    db.prepare('UPDATE inventory SET quantity = ? WHERE product_id = ?')
      .run(quantity, id)
};
