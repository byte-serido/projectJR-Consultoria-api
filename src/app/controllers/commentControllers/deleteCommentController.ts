import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteComment } from "../../usercases/commentUserCases/deleteComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteComment
 *
 *  Antes de deletar um comentário, ela testa se o comentário existe.
 *
 *  Se correu tudo bem retorna o status 200.
 *
 *  Se ocorreu algum erro no processo retorna o status 400.
 *
 */
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
      return res
        .status(400)
        .send({ error: "A exclusão do comentário falhou!" });
    }
  }
}
