import express from "express";
import tokenRouter from "./app/routers/token.js";
import protectedRouter from "./app/routers/protected.js";

const app = express();
app.use(express.json());
app.use(tokenRouter);
app.use(protectedRouter);
export default app;
