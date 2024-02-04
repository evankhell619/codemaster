import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    // port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//! desc provinces
export async function getProvince() {
  const [rows] = await pool.query("SELECT * FROM provinces ");
  return rows;
}

export async function getProvinces(id) {
  const [rows] = await pool.query(
    `SELECT * FROM regencies WHERE province_id = ?`,
    [id]
  );
  return rows[0];
}
// const products = await getProduct(30);
// console.log(products);

export async function createProvinces(id, name) {
  const result = await pool.query(
    ` insert into provinces (id,name)
  values( ?,?) `,
    [id, name]
  );
  return getProvince(id);
}

// const result = await createProvinces(1, "test");
// console.log(result);
