import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateMember } from "../../usercases/memberUsercases/createMember";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreateCMember
 *
 *  Antes de criar um novo membro, ela testa se o membro existe e
 *  se tem alguma informação vazia, caso exista informação vazia
 *  retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem retorna o membro.
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 *
 */
export class CreateMemberController {
  async handle(req: Request, res: Response) {
    const { name, registration, number, role, description, imgUrl } = req.body;
    try {
      if (
        await prisma.member.findUnique({
          where: { registration: registration },
        })
      ) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ error: "Membro já existente" });
      }

      const create = new CreateMember();
      const member = await create.execute({
        name,
        registration,
        number,
        role,
        description,
        imgUrl,
      });

      return res.send({
        member,
      });
    } catch (err) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Falha no Registro de membro" });
    }
  }
}
