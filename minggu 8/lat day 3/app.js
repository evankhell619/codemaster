import express from "express";
import router from "./app/routes.js";
import pool from "../database.js";

const app = express();
app.use(express.json());
app.use(router);

export async function getBooks() {
  const [rows] = await pool.query("SELECT * FROM books");
  return rows;
}

export async function getBook(id) {
  const [rows] = await pool.query(`SELECT * FROM books WHERE id = ?`, [id]);
  return rows[0];
}

export function createBook() {
  const query = `insert into books (id, title, author_id, categories, isbn) values (?,?,?,?,?)`;
  pool.query(query, [id, title, author_id, categories, isbn], (err, result) => {
    if (err) {
      if ("ER_DUP_ENTRY" === err.code) {
        return res.status(400).json({ message: "Duplicate entry" });
      }
      throw err;
    }
    res.json({ message: "Data has been inserted", id: result.insertId });
  });
}

const port = 8000;
app.listen(port, () => {
  console.log(` Server run on port ${port}`);
});
