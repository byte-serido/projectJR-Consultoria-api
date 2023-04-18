import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateContact } from "../../usercases/contactUserCases/createContact";
<<<<<<< HEAD
import { StatusCodes } from "http-status-codes";
=======
import {StatusCodes} from "http-status-codes"
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreateContact
 *
 *  Antes de criar um novo contato, ela testa se o contato existe.
 *
 *  Se correu tudo bem retorna o contato .
 *
 *  Se ocorreu algum erro no processo retorna status:
 *
 *  UNAUTHORIZED = 401
 *  NOT_FOUND = 404
 *
 */
export class CreateContactController {
  async handle(req: Request, res: Response) {
    const { email, nome, empresa, numero, proposta } = req.body;

    try {
      if (await prisma.contact.findUnique({ where: { email: email } })) {
<<<<<<< HEAD
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ erro: "O contato já existe!" });
=======
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "O contato já existe!" });
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
      }

      const create = new CreateContact();
      const contact = await create.execute({
        email,
        nome,
        empresa,
        numero,
        proposta,
      });

      return res.send({
        contact,
      });
    } catch (error) {
<<<<<<< HEAD
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Erro na criação do contato!" });
=======
      return res.status(StatusCodes.NOT_FOUND).send({ error: "Erro na criação do contato!" });
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
    }
  }
}
