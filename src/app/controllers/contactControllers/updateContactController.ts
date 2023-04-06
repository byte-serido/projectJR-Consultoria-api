import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateContact } from "../../usercases/contactUserCases/updateContact";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class UpdateContactController {
  async handle(req: Request, res: Response) {
    const { id, email, nome, empresa, numero, proposta } = req.body;

    try {
      if (!(await prisma.contact.findUnique({ where: { id: id } }))) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: `Contato não encontrado` });
      }
      const update = new UpdateContact();
      const contact = await update.execute({
        id,
        email,
        nome,
        empresa,
        numero,
        proposta,
      });

      return res
        .status(StatusCodes.OK)
        .send({ contact, sucess: "Contato alterado com sucesso !" });
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Este contato não existe !` });
    }
  }
}
