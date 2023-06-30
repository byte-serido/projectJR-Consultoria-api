import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOneContact
 *
 *  Ela retorna um contact, primeiro testa se o contact existe,
 *  se não existir retorna status:
 *  NOT_FOUND = 404
 *
 *  Se correu tudo bem retorna status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400v
 *
 */
export class GetOneContactController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contact = await prisma.contact.findUnique({
        where: {
          id: id,
        },
      });

      if (!contact) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Contato não existe!" });
      }

      return res.status(StatusCodes.OK).json(contact);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o contato!" });
    }
  }
}
