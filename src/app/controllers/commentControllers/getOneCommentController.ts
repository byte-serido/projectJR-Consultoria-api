import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOneComment
 *
 *  Ela retorna um comment, primeiro testa se o comment existe,
 *  se não existir retorna status:
 *  NOT_FOUND = 404
 *
 *  Se correu tudo bem retorna status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class GetOneCommentController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const comment = await prisma.comment.findUnique({
        where: {
          id: id,
        },
      });

      if (!comment) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Comment não existe!" });
      }

      return res.status(StatusCodes.OK).json(comment);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o comment!" });
    }
  }
}
