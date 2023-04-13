import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateSolution } from "../../usercases/solutionsUserCases/updateSolution";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do UpdateSolution
 *
 *  Antes de editar uma solução, ela testa se a solução existe,
 *  e se tem o nome vazio, caso exista nome vazio retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem, retorna o status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo, retorna status:
 *  BAD_REQUEST = 400
 */
export class UpdateSolutionController {
  async handle(req: Request, res: Response) {
    const { id, name, description, imgUrl } = req.body;

    try {
      if (
        await prisma.solution.findMany({
          where: {
            id: id,
          },
        })
      ) {
        const update = new UpdateSolution();
        await update.execute({
          id,
          name,
          description,
          imgUrl,
        });

        if (!name) {
          return res.status(StatusCodes.UNAUTHORIZED).send({
            error: "A solução deve ter titulo",
          });
        }

        return res
          .status(StatusCodes.CREATED)
          .send({ sucess: "Solução alterada com sucesso!" });
      }
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "A Edição Falhou," });
    }
  }
}
