import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteMember
 *
 *  Antes de deletar um membro, ela testa se o membro existe,
 *  se não existir retorna status:
 *  BAD_REQUEST = 400
 *
 *  Se correu tudo bem retorna status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 *
 */
export class DeletMemberController {
  async handle(req: Request, res: Response) {
    try {
      if (!req.body.id) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: "Falha na exclusão de Membro" });
      }
      const { id } = req.body;

      const delMember = await prisma.member.delete({
        where: {
          id: id,
        },
      });

      return res.status(StatusCodes.CREATED).send("Sucesso");
    } catch (err) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Falha na exclusão de Membro" });
    }
  }
}
