import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateSolution } from "../../usercases/solutionsUserCases/createSolution";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreateSolution
 *
 *  Antes de criar uma nova solução, ela testa se a solução existe e
 *  se o nome está vazio, caso não exista ou tenha nome vazio
 *  retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem retorna a solução.
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class CreateSolutionController {
  async handle(req: Request, res: Response) {
    const { name, description, imgUrl } = req.body;

    try {
      if (await prisma.solution.findUnique({ where: { name: name } })) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ error: "A Solução Já Existe" });
      }

<<<<<<< HEAD
      if (!name) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ error: "Por favor adicione um nome na solução" });
      }

      const create = new CreateSolution();
      const solution = await create.execute({ name, description, imgUrl });

      return res.send({
        solution,
      });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "O Cadastro Falhou" });
    }
  }
}
=======
        try {
            if (await prisma.solution.findUnique({ where: { name: name } })) {
                return res.status(StatusCodes.UNAUTHORIZED).send({ error: "A Solução Já Existe" })
            }

            if (!name) {
                return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Por favor adicione um nome na solução" })
            }

            const create = new CreateSolution();
            const solution = await create.execute({ name, description, imgUrl });

            return res.send({
                solution
            },);

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "O Cadastro Falhou" });
        }
    };
}
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
