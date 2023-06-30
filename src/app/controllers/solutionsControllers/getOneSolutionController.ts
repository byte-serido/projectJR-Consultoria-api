import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOneSolution
 *
 *  Ela retorna uma solução, primeiro testa se a solução existe,
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
export class GetOneSolutionController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const solution = await prisma.solution.findUnique({
        where: {
          id: id,
        },
      });

      if (!solution) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Solução não existe!" });
      }

      return res.status(StatusCodes.OK).json(solution);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o solução!" });
    }
  }
}
