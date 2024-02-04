-- Active: 1705656608433@@127.0.0.1@3306@shopping_cart
CREATE DATABASE shopping_cart;
use shopping_cart;

CREATE Table products (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar (255),
  category varchar (255) NOT NULL,
  price double DEFAULT (0) NOT NULL,
  in_stock boolean DEFAULT (true) NOT NULL,
  description text,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE Table cart (
  id int PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  quantity int DEFAULT 1 not null,
  total FLOAT DEFAULT 0 not NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  Foreign Key (product_id) REFERENCES products(id)
)

CREATE Table orders (
  id int PRIMARY KEY AUTO_INCREMENT,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  number VARCHAR (255) not null,
  total FLOAT DEFAULT 0 not null,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE Table order_items (
  id int PRIMARY KEY AUTO_INCREMENT,
  order_id int not null,
  product_id int not null,
  quantity int DEFAULT 1 not null,
  price float DEFAULT 0 not null,
  total FLOAT DEFAULT 0 not null,
  Foreign Key (order_id) REFERENCES orders(id),
  Foreign Key (product_id) REFERENCES products(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)