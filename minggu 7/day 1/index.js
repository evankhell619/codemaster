const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Popol \n");
});

const port = 1234;

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}/`);
});
