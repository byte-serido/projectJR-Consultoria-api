import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { GetAllDepo } from "../../usercases/depositionsUserCases/getAllDepo";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do GetAllDepo
 *
 *  Antes de listar os depoimentos, ela testa se existe algum depoimento,
 *  se não existir retorna status:
 *  PAYMENT_REQUIRED = 402
 *
 *  Se correu tudo bem retorna o status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
export class GelAllDepoController {
  async handle(req: Request, res: Response) {
    try {
      
      const getAllDepo = new GetAllDepo();
      const result = await getAllDepo.execute()

      if (!result) {
        return res.status(StatusCodes.PAYMENT_REQUIRED).send({ error: "Nenhum depoimento cadastrado" })
      }

      return res.status(StatusCodes.OK).json(result);

    } catch (error) {
        return res.status(StatusCodes.NOT_FOUND).send({
        error: "Erro na busca por depoimentos,"
      })
    }
  }
}