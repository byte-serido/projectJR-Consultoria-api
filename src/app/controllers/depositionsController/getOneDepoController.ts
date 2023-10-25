import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOneDepo
 *
 *  Ela retorna um depoimento, primeiro testa se o depoimento existe,
 *  se não existir retorna status:
 *  NOT_FOUND = 404
 *
 *  Se correu tudo bem retorna status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400v
 *
 */
export class GetOneDepoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const depo = await prisma.deposition.findUnique({
        where: {
          id: id,
        },
      });

      if (!depo) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Depoimento não existe!" });
      }

      return res.status(StatusCodes.OK).json(depo);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o depoimento!" });
    }
  }
}
