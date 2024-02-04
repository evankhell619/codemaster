import pool from "../config/database.js";

const products = {
  getProducts: async () => {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
  },
  getProduct: async (id) => {
    const [rows] = await pool.query(`SELECT * FROM products WHERE id = ? `, [
      id,
    ]);
    return rows[0];
  },

  createProduct: async (name, category, price, description) => {
    const [result] = await pool.query(
      ` insert into products (name, category, price, description)
    values( ?,?,?,? ) `,
      [name, category, price, description]
    );
    const id = result.insertId;
    return getProduct(id);
  },
};

export default products;
