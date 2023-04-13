import { Request, Response } from "express";
import { GetMembers } from "../../usercases/memberUsercases/getMembers";
import { StatusCodes } from "http-status-codes";

/**
 *  Essa é a classe controller do getMember
 *
 *  Ela busca um mebro, antes disso ela testa se o membro existe,
 *  se não existir retorna status 400.
 *
 *  Se correu tudo bem retorna o membro e status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class GetMembersController {
  async handle(req: Request, res: Response) {
    try {
      const getMembers = new GetMembers();
      const result = await getMembers.execute();

      if (!Object.keys(result).length) {
        return res.status(400).json({ error: "Não há membros cadastrados" });
      }

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Não há membros cadastrados" });
    }
  }
}
