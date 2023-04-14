import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateContact } from "../../usercases/contactUserCases/createContact";
import {StatusCodes} from "http-status-codes"

export const prisma = new PrismaClient();

export class CreateContactController {
  async handle(req: Request, res: Response) {
    const { email, nome, empresa, numero, proposta } = req.body;

    try {
      if (await prisma.contact.findUnique({ where: { email: email } })) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "O contato já existe!" });
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
      return res.status(StatusCodes.NOT_FOUND).send({ error: "Erro na criação do contato!" });
    }
  }
}
