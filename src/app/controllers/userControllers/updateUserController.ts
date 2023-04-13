import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateUser } from "../../usercases/userUserCases/updateUser";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do UpdateUser
 *
 *  Antes de editar um usuário, ela testa se o usuário existe,
 *  caso não exista retorna status 400.
 *
 *  Se correu tudo bem, retorna o status 200.
 *
 *  Se ocorreu algum erro no processo, retorna status 400.
 *
 */
export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, email, username, name, mod, password } = req.body;

    try {
      if (!(await prisma.user.findUnique({ where: { id: id } }))) {
        return res.status(400).send({ error: `Usuário não encontrado` });
      }
      const update = new UpdateUser();
      await update.execute({
        id,
        email,
        name,
        username,
        mod,
        password,
      });

      return res.status(200).send({ sucess: "Contato alterado com sucesso !" });
    } catch (error) {
      return res.status(400).send({ error: `Este contato não existe !` });
    }
  }
}
