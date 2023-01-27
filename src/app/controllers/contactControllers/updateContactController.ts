import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateContact } from "../../usercases/contactUserCases/updateContact";

export const prisma = new PrismaClient();

export class UpdateContactController {
  async handle(req: Request, res: Response) {
    const { id, email, nome, empresa, numero, proposta } = req.body;

    try {
      if (await prisma.contact.findMany({ where: { id: id } })) {
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
          .status(200)
          .send({ contact, sucess: "Contato alterado com sucesso !" });
      }
    } catch (error) {
      return res.status(400).send({ error: `Contato com ${id} não existe !` });
    }
  }
}
