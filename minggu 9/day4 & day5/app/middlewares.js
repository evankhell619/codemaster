import { tr } from "@faker-js/faker";
import prisma from "./prisma.js";

export const authToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: "Token is required",
    });
  }
  const validToken = await prisma.token.findUnique({
    where: { token },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          is_blocked: true,
        },
      },
    },
  });
  if (!validToken) {
    return res.status(401).json({
      msg: "invalid token",
    });
  }
  if (validToken.expires_at < new Date()) {
    return res.status(401).json({
      msg: "expired token",
    });
  }
  if (validToken.user.is_blocked) {
    return res.status(401).json({
      msg: "blocked user",
    });
  }
  req.user = validToken.user;
};
