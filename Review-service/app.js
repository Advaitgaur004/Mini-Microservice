const express = require('express');
const { getReviews, addReview } = require('./database');
const app = express();
app.use(express.json());

app.get('/reviews', (req, res) => {
  const reviews = getReviews();
  res.json(reviews);
});

app.post('/reviews', (req, res) => {
  addReview(req.body);
  res.status(201).send();
});

app.listen(3003, '0.0.0.0',() => console.log('Review Service running on port 3003'));