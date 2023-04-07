import { Request, Response } from "express";
import { GetUsers } from "../../usercases/userUserCases/getAllUser";

/**
 *  Essa é a classe controller do GetAllUsers
 *
 *  Antes de listar todos os usuários, ela testa se existe algum ususário,
 *  se não existir retorna status 400.
 *
 *  Se correu tudo bem retorna o status 201.
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
export class GetUserController {
  async handle(req: Request, res: Response) {
    try {
      const getUsers = new GetUsers();
      const result = await getUsers.execute();

      if (!Object.keys(result).length) {
        return res.status(400).json({ error: "Não há usuários cadastrados" });
      }

      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).send({ error: "Não há usuários cadastrados" });
    }
  }
}
