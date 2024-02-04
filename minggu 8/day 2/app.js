import express from "express";
import { getProducts, getProduct, createProduct } from "./database.js";

const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.get("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const product = await getProduct(id);
  res.send(product);
});

app.post("/products", async (req, res) => {
  const { product_name, price, category } = req.body;
  const product = await createProduct(product_name, price, category);
  res.status(201).send(product);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log(` Server run on port 8080`);
});
