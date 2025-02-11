const Database = require('better-sqlite3');

const db = new Database('reviews.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    rating INTEGER,
    comment TEXT
  )
`);

module.exports = {
  getReviews: () => db.prepare('SELECT * FROM reviews').all(),
  addReview: (review) =>
    db.prepare('INSERT INTO reviews (product_id, rating, comment) VALUES (?, ?, ?)')
      .run(review.product_id, review.rating, review.comment)
};