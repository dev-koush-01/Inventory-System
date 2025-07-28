import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'inventory_db'
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL connected.");
});
