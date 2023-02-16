import { Request, Response } from "express";
import { PrismaClient, Post } from "@prisma/client";
import { CreateComment } from "../../usercases/commentUserCases/createComment";

export const prisma = new PrismaClient();

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { authorName, text, posts } = req.body;

    try {
      if (!(await prisma.post.findUnique({ where: { id: posts } }))) {
        return res.status(400).send({ erro: "Post does not exists!" });
      }

      if (!text && !authorName) {
        return res
          .status(400)
          .send({ erro: "Insert a text comment and authorName!" });
      }
      if (!text) {
        return res.status(400).send({ erro: "Insert a text comment !" });
      }
      if (!authorName) {
        return res.status(400).send({ erro: "Insert a authorName !" });
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
      return res.status(400).send({ error: "Comment failed !" });
    }
  }
}
