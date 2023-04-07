import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeletePost
 *
 *  Ela busca e deleta uma postagem.
 *
 *  Se correu tudo bem retorna o depoimento e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class DeletePost {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.body;

      await prisma.comment.deleteMany({
        where: {
          posts: id,
        },
      });

      await prisma.post.delete({
        where: {
          id: id,
        },
      });

      return res.status(StatusCodes.CREATED).send({
        sucess: "Post foi apagado com sucesso!",
      });
    } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Não foi possível apagar esse post." });
    }
  }
}
