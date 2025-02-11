const express = require('express');
const { getProducts, addProduct } = require('./database');
const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = req.body;
  addProduct(product);
  res.status(201).send();
});

app.listen(3001, '0.0.0.0',() => console.log('Product Service running on port 3001'));