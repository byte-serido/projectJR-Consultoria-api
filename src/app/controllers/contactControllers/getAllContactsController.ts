import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { GetAllContacts } from "../../usercases/contactUserCases/getAllContacts";
<<<<<<< HEAD
import { StatusCodes } from "http-status-codes";
=======
import {StatusCodes} from "http-status-codes"
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do GetAllContacts
 *
 *  Antes de listar os contatos, ela testa se existe algum contato,
 *  se não existir retorna status:
 *  PAYMENT_REQUIRED = 402
 *
 *  Se correu tudo bem retorna o status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
export class GetAllContactsController {
  async handle(req: Request, res: Response) {
    try {
      const getAllContacts = new GetAllContacts();
      const result = await getAllContacts.execute();

      if (!result) {
        return res
          .status(StatusCodes.PAYMENT_REQUIRED)
          .send({ error: "Não existe contatos cadastrados" });
      }

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      return res.status(400).send({ error: "Não existe contatos cadastrados" });
    }
  }
}
