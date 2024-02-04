import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();
const router = Router();

router.get("/products", async (req, res) => {
  if (req.query.id) {
    const productIds = [req.query.id].map(Number).filter((id) => !isNaN(id));
    console.log(productIds);
    const products = await prisma.products.findMany({
      where: { id: { in: productIds } },
    });
    res.json(products);
    return;
  }

  const products = await prisma.products.findMany();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const productId = req.params.id;

  if (isNaN(productId)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  try {
    const product = await prisma.products.findUniqueOrThrow({
      where: { id: Number(productId) },
    });
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
});

router.post("/products", async (req, res) => {
  const { name, category, price, in_stock, description } = req.body;

  if (!name || !category || !price || !in_stock) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const product = await prisma.products.create({
    data: { name, category, price, in_stock, description },
  });

  res.json({ message: "Product created successfully", product });
});

router.put("/products/:id", async (req, res) => {
  const { name, category, price, in_stock, description } = req.body;

  if (!name || !category || !price) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const productId = req.params.id;

  if (isNaN(productId)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  try {
    const product = await prisma.products.update({
      where: { id: Number(productId) }, // !!!!!!!!!
      data: { name, category, price, in_stock, description },
    });
    res.json({ message: "Product updated successfully", product });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
});

router.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;

  if (isNaN(productId)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  try {
    const product = await prisma.products.delete({
      where: { id: Number(productId) },
    });
    res.json({ message: "Product deleted successfully", product });
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
});

export default router;
