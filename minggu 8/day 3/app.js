import express from "express";
import { getProvince, getProvinces, createProvinces } from "./database.js";

const app = express();

app.use(express.json());

app.get("/provinces", async (req, res) => {
  const province = await getProvince();
  res.send(province);
});

app.get("/provinces/:id/regencies", async (req, res) => {
  const id = req.params.id;
  const provinces = await getProvinces(id);
  res.send(provinces);
});

app.post("/provinces", async (req, res) => {
  const { id, name } = req.body;
  const province = await createProvinces(id, name);
  res.status(201).send(province);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = 8080;
app.listen(port, () => {
  console.log(` Server run on port ${port}`);
});
