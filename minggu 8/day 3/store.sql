CREATE DATABASE store_app;
use store_app;

CREATE Table products (
  product_id int auto_increment primary key,
  product_name varchar(50) not null,
  price double not null default(0),
  category varchar(50) not null,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products (product_name, price, category)
VALUES
( 'Apple', 1.00, 'Fruits'),
( 'Banana', 0.50, 'Fruits'),
( 'Orange', 0.75, 'Fruits'),
( 'Mango', 1.50, 'Fruits'),
( 'Pineapple', 1.25, 'Fruits'),
( 'Carrot', 0.30, 'Vegetables'),
( 'Broccoli', 0.45, 'Vegetables');