import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteComment } from "../../usercases/commentUserCases/deleteComment";

export const prisma = new PrismaClient();

export class DeleteCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!(await prisma.comment.findUnique({ where: { id: id } }))) {
        return res.status(400).send({ error: "Comment not foundt!" });
      }
      const delComment = new DeleteComment();
      await delComment.execute({ id });

      return res.status(200).send({
        sucess: "Comment delete successful!",
      });
    } catch (error) {
      return res.status(400).send({ error: "Comment delete failed!" });
    }
  }
}
