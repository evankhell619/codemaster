import { Router } from "express";
import { authToken } from "./middleware.js";

const router = Router();

router.get("/protected", authToken, async (req, res) => {
  res.json({
    msg: "you successfully acces !data protected ",
    currentUser: req.user,
  });
});

export default router;
