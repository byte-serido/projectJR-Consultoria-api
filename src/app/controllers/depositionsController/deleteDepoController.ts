import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do DeleteDepo
 *
 *  Ela busca e deleta um depoimento.
 *
 *  Se correu tudo bem retorna o depoimento e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 *
 */
export class DeleteDepoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.body;

      await prisma.deposition.delete({
        where: {
          id: id,
        },
      });

<<<<<<< HEAD
      return res.status(StatusCodes.CREATED).send({
        sucess: "Depoimento Apagado com Sucesso!",
      });
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).send({
        error: "Não foi possível apagar o depoimento!",
      });
=======
            const { id } = req.body;

            await prisma.deposition.delete({
                where: {
                    id: id,
                },
            },);

            return res.status(StatusCodes.CREATED).send({
                sucess: "Depoimento Apagado com Sucesso!"
            });

        } catch (error) {
            return res.status(StatusCodes.NOT_FOUND).send({
                error: "Não foi possível apagar o depoimento!"
            });
        }
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
    }
  }
}
