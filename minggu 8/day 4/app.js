import express from "express";
import productRepo from "./app/products.js";
import cartRepo from "./app/cart.js";

const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await productRepo.getProducts();
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productRepo.getProduct(id);
    if (product === undefined) {
      throw new Error("Product not found");
    }
    res.send(product);
  } catch (err) {
    next(err);
  }
});

app.post("/cart", async (req, res) => {
  if (!req.body.product_id || !req.body.quantity) {
    res.status(400).json({
      error: "product_id and quantity are required",
    });

    return;
  }

  try {
    await cartRepo.addToCart(req.body.product_id, req.body.quantity);

    res.json({
      message: "Product added to cart",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.get("/cart", async (req, res) => {
  const cart = await cartRepo.getCart();
  res.json(cart);
});

app.delete("/cart/:id", async (req, res) => {
  try {
    await cartRepo.deleteItem(req.params.id);

    res.json({
      message: "Product removed from cart",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.delete("/cart", async (req, res) => {
  await cartRepo.emptyCarty();

  res.json({
    message: "Cart emptied",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!").json();
});

export default app;
