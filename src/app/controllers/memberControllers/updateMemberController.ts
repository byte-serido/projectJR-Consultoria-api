import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateMember } from "../../usercases/memberUsercases/updateMember";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do updateMember
 *
 *  Ela edita um mebro, antes ela testa se o membro existe,
 *  se não existir retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem retorna o membro e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class UpdateMemberController {
  async handle(req: Request, res: Response) {
    const { id, name, registration, number, role, description, imgUrl } =
      req.body;
    try {
      if (await prisma.member.findUnique({ where: { id: id } })) {
        const update = new UpdateMember();
        await update.execute({
          id,
          name,
          registration,
          number,
          role,
          description,
          imgUrl,
        });

        return res
          .status(StatusCodes.CREATED)
          .send({ sucess: "O membro foi alterado com sucesso!" });
      }

      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ error: "Este Membro não existe" });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Falha na atualização de Membro" });
    }
  }
}
