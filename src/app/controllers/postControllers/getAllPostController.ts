import { Request, Response } from "express";
import { GetAllPost } from "../../usercases/postUserCases/getAllPost";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do GetAllPost
 *
 *  Antes de listar as postagens, ela testa se existe alguma postagem,
 *  se não existir retorna status:
 *  BAD_REQUEST = 400
 *
 *  Se correu tudo bem retorna o status:
 *  OK = 200
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 */
export class GetAllPostController {
  async handle(req: Request, res: Response) {
    try {
      const getAllPost = new GetAllPost();
      const result = await getAllPost.execute();

      if (!result) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: "Nenhum post criado" });
      }

<<<<<<< HEAD
      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro na amostragem de post" });
=======
            const getAllPost = new GetAllPost();
            const result = await getAllPost.execute()

            if (!result) {
                return res.status(StatusCodes.BAD_REQUEST).send({ error: "Nenhum post criado" })
            }

            return res.status(StatusCodes.OK).json(result);

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro na amostragem de post"})
        }
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
    }
  }
}
