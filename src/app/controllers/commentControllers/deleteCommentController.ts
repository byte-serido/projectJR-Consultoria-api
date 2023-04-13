import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteComment } from "../../usercases/commentUserCases/deleteComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class DeleteCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!(await prisma.comment.findUnique({ where: { id: id } }))) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Comentário não encontrado!" });
      }
      const delComment = new DeleteComment();
      await delComment.execute({ id });

      return res.status(StatusCodes.CREATED).send({
        sucess: "Comentário excluído com sucesso!",
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({ error: "A exclusão do comentário falhou!" });
    }
  }
}
