import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteUser } from "../../usercases/userUserCases/deleteUser";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteSUser
 *
 *  Ela busca e deleta um usuário. Antes ela testa se o usario existe,
 *  se não existe, retorna status 400.
 *
 *  Se correu tudo bem, retorna o status 200.
 *
 *  Se ocorreu algum erro no processo, retorna status 400.
 *
 */
export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!(await prisma.user.findUnique({ where: { id: id } }))) {
        return res.status(400).send({ error: `Usuário não encontrado` });
      }
      const delUser = new DeleteUser();
      await delUser.execute({ id });

      return res.status(200).send({
        sucess: "Usuário deletado com sucesso !",
      });
    } catch (error) {
      return res.status(400).send({ error: `Erro ao deleter o usuário!` });
    }
  }
}
