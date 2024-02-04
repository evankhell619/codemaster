import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("/products", async (req, res) => {
  const products = await prisma.products.findMany();
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const products = await prisma.products.findUnique({
    where: {
      id: parseInt(productId),
    },
  });
  if (!products) {
    res.status(404).send("product not found");
  }
});

app.post("/products", async (req, res) => {
  const newProduct = req.body;

  const addProducts = await prisma.products.create({
    data: {
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      category: newProduct.category,
    },
  });
  res.send({
    data: addProducts,
    msg: "success",
  });
});

app.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;
  await prisma.products.delete({
    where: {
      id: parseInt(productId),
    },
  });
  res.send("product deleted");
});

app.put("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.name &&
      productData.price &&
      productData.description &&
      productData.category
    )
  ) {
    res.status(400).send(" some field are missing");
  }

  const products = await prisma.products.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      category: productData.category,
    },
  });
  res.send({
    data: products,
    msg: "success updated",
  });
});

app.patch("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  const products = await prisma.products.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      category: productData.category,
    },
  });
  res.send({
    data: products,
    msg: "success updated",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
export default app;
