import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateComment } from "../../usercases/commentUserCases/updateComment";

export const prisma = new PrismaClient();

export class UpdateCommentController {
  async handle(req: Request, res: Response) {
    const { id, authorName, text, posts } = req.body;

    try {
      if (!(await prisma.comment.findUnique({ where: { id: id } }))) {
        return res.status(400).send({ error: "Comment not foundt!" });
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

      const update = new UpdateComment();
      const comment = await update.execute({
        id,
        authorName,
        text,
        posts,
      });

      return res
        .status(200)
        .send({ comment, sucess: "Comment update successful!" });
    } catch (error) {
      return res.status(400).send({ error: "Comment update failed!" });
    }
  }
}
