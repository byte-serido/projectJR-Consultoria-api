import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteContact } from "../../usercases/contactUserCases/deleteContact";

export const prisma = new PrismaClient();

export class DeleteContactController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      if (await prisma.contact.findUnique({ where: { id: id } })) {
        const delContac = new DeleteContact();
        const contactDeleted = await delContac.execute({ id });

        return res.status(200).send({
          sucess: "Contato deletado com sucesso !",
        });
      }
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao deleter contato com id ${id} !` });
    }
  }
}
