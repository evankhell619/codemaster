import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

class Author {
  async get(_req: Request, res: Response, next: NextFunction) {
    try {
      const author = await prisma.author.findMany();
      res.status(200).json(author);
    } catch (error) {
      next(error);
    }
  }
}

export default Author;
