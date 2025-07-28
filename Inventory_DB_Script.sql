-- Create the Database
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;

-- Create the Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Sample Products
INSERT INTO products (name, price, quantity, expiry_date)
VALUES 
('Dove Soap', 45.50, 100, '2025-12-31'),
('Surf Excel', 120.00, 80, '2026-03-15'),
('Parle-G Biscuits', 10.00, 500, '2025-08-01'),
('Colgate Toothpaste', 55.75, 150, '2025-11-20');

-- Read: View All Products
SELECT * FROM products;

-- Read: Single Product By ID
SELECT * FROM products WHERE id = 2;

-- Update: Change Price and Quantity of Product with ID = 1
UPDATE products
SET price = 50.00,
    quantity = 110
WHERE id = 1;

-- Delete: Remove Product with ID = 4
DELETE FROM products WHERE id = 4;

-- BONUS: Stored Procedure to Add a Product
DELIMITER //

CREATE PROCEDURE AddProduct(
    IN p_name VARCHAR(100),
    IN p_price DECIMAL(10,2),
    IN p_quantity INT,
    IN p_expiry DATE
)
BEGIN
    INSERT INTO products (name, price, quantity, expiry_date)
    VALUES (p_name, p_price, p_quantity, p_expiry);
END //

DELIMITER ;

-- Call the stored procedure
CALL AddProduct('Dettol Handwash', 70.00, 90, '2025-10-10');

-- View Updated Product Table
SELECT * FROM products;
