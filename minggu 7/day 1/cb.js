const http = require("http");

// const server = http.createServer((req, res) => {
// if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hellow");
//     return;
//   }
//   if (req.url === "/about") {
//     res.writeHead(400, { "Content-Type": "text/plain" });
//     res.end("Aboutpage");
//     return;
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Hello bitches");
//   }
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        msg: "hellow",
      })
    );
    return;
  }
  if (req.url === "/about") {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        msg: "about",
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
