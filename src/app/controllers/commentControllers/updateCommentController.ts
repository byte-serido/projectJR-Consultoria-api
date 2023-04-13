import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateComment } from "../../usercases/commentUserCases/updateComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class UpdateCommentController {
  async handle(req: Request, res: Response) {
    const { id, authorName, text, posts } = req.body;

    try {
      if (!(await prisma.comment.findUnique({ where: { id: id } }))) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Comentário não encontrado!" });
      }
      if (!text && !authorName) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ erro: "Insira um comentário de texto e o nome do autor!" });
      }
      if (!text) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira um comentário do texto!" });
      }
      if (!authorName) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira um nome do autor!" });
      }

      const update = new UpdateComment();
      const comment = await update.execute({
        id,
        authorName,
        text,
        posts,
      });

      return res
        .status(StatusCodes.CREATED)
        .send({ comment, sucess: "Atualização de comentário realizada com sucesso!" });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({ error: "A atualização do comentário falhou!" });
    }
  }
}
