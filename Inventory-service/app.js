const express = require('express');
const { getInventory, updateStock } = require('./database');
const app = express();
app.use(express.json());

app.get('/inventory', (req, res) => {
  const inventory = getInventory();
  res.json(inventory);
});

app.patch('/inventory/:id', (req, res) => {
  updateStock(req.params.id, req.body.quantity);
  res.status(204).send();
});

app.listen(3002, '0.0.0.0', () => {
  console.log('Inventory Service running on port 3002');
});
