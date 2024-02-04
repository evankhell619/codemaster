import { json } from "express";
import prisma from "../prisma.js";

export const authToken = async (req, res, next) => {
  // const token = req.headers["authorization"];
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: "token is required",
    });
  }
  const validToken = await prisma.token.findUnique({
    where: { token },
    include: { user: true },
  });
  if (!validToken) {
    return res.status(401).json({
      msg: "invalid token",
    });
  }
  if (validToken.expires_at < new Date()) {
    return res.status(401).json({
      msg: "token expired",
    });
  }
  if (validToken.user.is_blocked) {
    return res.status(401).json({
      msg: "bloked userr",
    });
  }

  req.user = validToken.user;
  // console.log("User: ", req.user);

  next();
};
