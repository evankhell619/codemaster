import { Router } from "express";

const router = Router();

router.get("/publishers", (req, res) => {
  res.json({ hellow });
});
router.get("/publishers/:id", (req, res) => {
  res.json({ hellow });
});
router.post("/publishers", (req, res) => {
  res.json({ hellow });
});

export default router;
