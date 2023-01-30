import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteUser } from "../../usercases/userUserCases/deleteUser";

export const prisma = new PrismaClient();

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      if (!(await prisma.user.findUnique({ where: { id: id } }))) {
        return res
          .status(400)
          .send({ error: `Usuário não encontrado` });
      }
      const delUser = new DeleteUser();
      await delUser.execute({ id });

      return res.status(200).send({
        sucess: "Usuário deletado com sucesso !",
      });
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao deleter o usuário!` });
    }
  }
}