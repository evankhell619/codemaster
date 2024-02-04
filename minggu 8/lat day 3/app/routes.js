import { Router } from "express";
import { getBooks, getBook, createBook } from "./database.js";

const router = Router();

router.get("/books", async (req, res) => {
  const books = await getBooks();
  res.send(books);
});

router.get("/books/:id", (req, res) => {
  const book = getBook();
  res.send(book);
});

router.post("/books", async (req, res) => {
  const { id, title, author_id, categories, isbn } = req.body;
  const bookAdd = await createBook(id, title, author_id, categories, isbn);
  res.json(bookAdd);
});
