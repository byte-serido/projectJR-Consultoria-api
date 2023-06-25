import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do getOneMember
 *
 *  Ela retorna um membro, primeiro testa se o membro existe,
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
export class GetOneMemberController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const member = await prisma.member.findUnique({
        where: {
          id: id,
        },
      });

      if (!member) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: "Membro não existe!" });
      }

      return res.status(StatusCodes.OK).json(member);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro ao buscar o membro!" });
    }
  }
}
