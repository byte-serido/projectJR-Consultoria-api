import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateDepo } from "../../usercases/depositionsUserCases/createDepo";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreateCDepo
 *
 *  Antes de criar um novo depoimento, ela testa se o depoimento existe e
 *  se tem alguma informação vazia, caso exista informação vazia
 *  retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem retorna o depoimento e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 *
 */
export class CreateDepoController {
  async handle(req: Request, res: Response) {
    const { name, testimony, office, company, imgUrl } = req.body;

    try {
      if (!name || !testimony || !company) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ error: "Preencha as informações vazias" });
      }

      const create = new CreateDepo();
      const depo = await create.execute({
        name,
        testimony,
        office,
        company,
        imgUrl,
      });

      return res.status(StatusCodes.CREATED).send({
        depo,
      });
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).send(error);
    }
  }
}
