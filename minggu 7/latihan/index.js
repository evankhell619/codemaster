import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hellowww popoll");
});

app.listen(port, () => {
  console.log(`listen on ${port}`);
});
