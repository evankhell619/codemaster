import express from "express";
import books from "./books.js";
import { checkToken, loggerMiddle, timeLog } from "./middleware.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(timeLog);
app.use(loggerMiddle);
// app.use(checkToken);

// app.get("/", (req, res) => {
//   res.send("hellowww popollll");
//   res.json({ msg: "hellowww popollll" });
// });

// //! use pug start
// app.set("view engine", "pug");
// app.set("views", "./views");

// app.get("/profile", (req, res) => {
//   res.render("profile", { name: " Popol" });
// });

// app.get("/web/books", (req, res) => {
//   res.render("books", { books });
// });
// //! pug end

// ? EJS start

// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.get("/profile", (req, res) => {
//   res.render("profile", { name: " Popol" });
// });

// app.get("/web/books", (req, res) => {
//   res.render("books", { books });
// });

// ? EJS end

// * handlebar start

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/profile", (req, res) => {
  res.render("profile", { name: " Popol" });
});

app.get("/web/books", (req, res) => {
  res.render("books", { books });
});

// * handle bar end

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);

  if (typeof book === "undefined") {
    res.status(404).json({ message: "Book not found" });
  } else {
    res.json(book);
  }
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  // res.setHeader("Content-Type", "application/json");
  // res.status(202).json({ message: "Book success added" });
  res.end(JSON.stringify(books));
});

// !put
app.put("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    res.status(404).json({ message: "Book not found" });
  }

  books[bookIndex] = {
    id: bookId,
    title: req.body.title,
    author: req.body.author,
    publication_year: req.body.publication_year,
    genre: req.body.genre,
    isbn: req.body.isbn,
  };
  books[bookIndex] = Object.assign(books[bookIndex], req.body);

  res.json({ message: "Book updated", data: books[bookIndex] });
});

app.delete("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    res.status(404).json({ message: "Book not found" });
  }

  books.splice(bookIndex, 1);

  res.json({
    msg: "Book deleted",
    data: books,
  });
});

app.listen(port, () => {
  console.log(`🚀 listen on ${port}`);
});
