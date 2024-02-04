import express from "express";
import { checkToken, loggerMiddle, timeLog } from "./middleware.js";

const app = express();
const port = 3333;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hellowww popollll");
//   res.json({ msg: "hellowww popollll" });
// });

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`🚀 listen on ${port}`);
});
