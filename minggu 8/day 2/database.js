import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//! desc products
export async function getProducts() {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
}

export async function getProduct(product_id) {
  const [rows] = await pool.query(
    `SELECT * FROM products WHERE product_id = ? `,
    [product_id]
  );
  return rows[0];
}
// const products = await getProduct(30);
// console.log(products);

export async function createProduct(product_name, price, category) {
  const [result] = await pool.query(
    ` insert into products (product_name, price, category)
  values( ?,?,?) `,
    [product_name, price, category]
  );
  const id = result.insertId;
  return getProduct(id);
}

// const result = await createProduct("test", 1, "test");
// console.log(result);
