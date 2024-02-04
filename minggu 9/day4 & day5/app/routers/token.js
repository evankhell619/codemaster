import { Router } from "express";
import { validateTokenReq } from "../validate.js";
import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import randomstring from "randomstring";
import crypto from "crypto";

const router = Router();

router.post("/token", validateTokenReq, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (!user) {
    return res.status(401).json({ msg: "invalid credential" });
  }
  if (user.is_blocked) {
    return res.status(401).json({ msg: "user is blocked" });
  }

  const validPassword = bcrypt.compareSync(req.body.password, user.password);

  if (!validPassword) {
    return res.status(401).json({ msg: "invalid credentiall" });
  }

  // const token = randomstring.generate();
  const token = crypto.randomBytes(64).toString("base64");

  await prisma.token.create({
    data: {
      token,
      user_id: user.id,
      expires_at: new Date(Date.now() + 31536000000),
    },
  });
  res.json({ token });
});

export default router;
