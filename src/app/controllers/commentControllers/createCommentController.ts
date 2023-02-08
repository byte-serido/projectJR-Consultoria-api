import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateComment } from "../../usercases/commentUserCases/createComment";

export const prisma = new PrismaClient();

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { id, authorName, text, posts } = req.body;

    try {
      if (await prisma.comment.findUnique({ where: { id: id } })) {
        return res.status(400).send({ erro: "Contact already exists !" });
      }

      const create = new CreateComment();
      const comment = await create.execute({
        authorName,
        text,
        posts,
      });

      return res.send({
        comment,
      });
    } catch (error) {
      return res.status(400).send({ error: "Registration failed !" });
    }
  }
}
