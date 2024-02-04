import express from "express";
import dotenv from "dotenv";
import authorRoutes from "./app/author/route";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/author", authorRoutes);

//server
const PORT = process.env.PORT;

app.listen(PORT, (): void => {
  console.log(`Running on port ${PORT}`);
});
