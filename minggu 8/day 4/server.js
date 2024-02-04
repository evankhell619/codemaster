import app from "./app.js";

const port = 8008;

app.listen(port, () => {
  console.log(` Server run on port ${port}`);
});
