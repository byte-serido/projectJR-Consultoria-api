import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteSolution
 *
 *  Ela busca e deleta uma solução.
 *
 *  Se correu tudo bem retorna o status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class DeleteSolutionController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.body;
      await prisma.solution.delete({ where: { id: id } });

      return res
        .status(StatusCodes.CREATED)
        .send({ success: "Solução apagada com sucesso!" });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({
          error:
            "A Exclusão Falhou, por favor tente novamente em alguns minutos!",
        });
    }
  }
}
