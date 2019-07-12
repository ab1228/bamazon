CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  product VARCHAR
  (45) NULL,
  department VARCHAR
  (50)NULL,
  price DECIMAL
  (10,2) NULL,
  stockQuantity INT NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("gloves", "baber tools", 10.00, 30);



