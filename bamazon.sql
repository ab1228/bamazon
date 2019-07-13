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
    ("gel", "baber tools", 15, 20);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("pomade", "baber tools", 15.50, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("sheers", "baber tools", 180, 50);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("whal clippers", "baber tools", 100, 50);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("cape", "baber tools", 20, 50);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("combs", "baber tools", 5, 60);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("plastic guards", "baber tools", 25, 50);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("metal guards", "baber tools", 30, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("70% alcohol", "baber tools", 8, 30);

  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("gloves", "baber tools", 10.00, 30);

 

