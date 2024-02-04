import express from "express";

const app = express();
app.use(express.json());

PORT = 4040;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
export default app;
