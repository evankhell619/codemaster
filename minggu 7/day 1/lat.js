const http = require("http");
// data = `{"books.json "}`;
const books = require("./books.json");

const server = http.createServer((req, res) => {
  // const filePath = "/books.json";
  if (req.url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: books,
      })
    );
    return;
  }
  if (req.url === "/books/1") {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "books.{id}",
      })
    );
    return;
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "get out",
      })
    );
  }
});

const port = 1234;

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}/`);
});
