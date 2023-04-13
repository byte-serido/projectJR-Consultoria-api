import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteContact } from "../../usercases/contactUserCases/deleteContact";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteContact
 *
 *  Antes de deletar um contato, ela testa se o contato existe,
 *  se não existir retorna status:
 *  BAD_REQUEST = 400
 *
 *  Se correu tudo bem retorna o status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 *
 */
export class DeleteContactController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!(await prisma.contact.findUnique({ where: { id: id } }))) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: `Contato não encontrado` });
      }
      const delContac = new DeleteContact();
      await delContac.execute({ id });

      return res.status(StatusCodes.CREATED).send({
        sucess: "Contato deletado com sucesso !",
      });
    } catch (error) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ error: `Erro ao deleter contato!` });
    }
  }
}
