const express = require("express");
const url = require("url");
const books = require("./books");

const app = express();
const port = 3000;
app.use(express.json());

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

app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// app.post("/books", (req, res) => {
//   req.json({
//     id: 11,
//     title: "Popol Kupa",
//     author: " Kupa",
//     publication_year: 2002,
//     genre: "MM",
//     isbn: "978-0-06-112008-4",
//   });
//   res.json(books);
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
