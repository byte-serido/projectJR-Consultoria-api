import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOnePostController
 *
 *  Ela retorna um post e os comentarios buscando pelo id
 * 
 *  Antes ela testa se o post existe,
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
export class GetOnePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    console.log("id = ", id);
    try {
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
      });

      if (!post) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Post não existe!" });
      }

      return res.status(StatusCodes.OK).json(post);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o post!" });
    }
  }
}
