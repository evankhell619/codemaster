import express from "express";

const app = express();
const port = 3000;
const url = require("url");
const books = require("./books.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.get("/books", (req, res) => {});

app.listen(port, () => {
  console.log(`listen on ${port}`);
});
