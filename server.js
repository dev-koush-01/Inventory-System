import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("✅ MySQL connected.");
});

// ---------------------------
// ✅ CRUD Routes Start Here
// ---------------------------

// 🔹 Test route
app.get('/', (req, res) => {
  res.send('Inventory System API is running...');
});

// 🔹 GET all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 🔹 GET product by ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
});

// 🔹 POST new product
app.post('/products', (req, res) => {
  const { name, price, quantity, expiry_date } = req.body;
  const sql = 'INSERT INTO products (name, price, quantity, expiry_date) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, price, quantity, expiry_date], (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ message: 'Product added', id: result.insertId });
  });
});

// 🔹 PUT update product
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, price, quantity, expiry_date } = req.body;
  const sql = 'UPDATE products SET name = ?, price = ?, quantity = ?, expiry_date = ? WHERE id = ?';
  db.query(sql, [name, price, quantity, expiry_date, id], (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: 'Product updated' });
  });
});

// 🔹 DELETE product
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: 'Product deleted' });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
