import express from "express";
import productRoute from "./app/routes/product.js";
const app = express();
app.use(express.json());
app.use(productRoute);

export default app;
