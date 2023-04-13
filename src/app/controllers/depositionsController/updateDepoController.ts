import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateDepo } from "../../usercases/depositionsUserCases/updateDepo";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do UpdateDepo
 *
 *  Antes de editar um depoimento, ela testa se o depoimento existe,
 *  e se tem alguma informação vazia, caso exista informação vazia
 *  retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem, retorna o depoimento e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  NOT_FOUND = 404
 */
export class UpdateDepos {
  async handle(req: Request, res: Response) {
    const { id, name, testimony, office, company, imgUrl } = req.body;

    try {
      if (
        await prisma.deposition.findMany({
          where: {
            id: id,
          },
        })
      ) {
        const updateDepo = new UpdateDepo();
        await updateDepo.execute({
          id,
          name,
          testimony,
          office,
          company,
          imgUrl,
        });

        if (!name || !testimony || !company) {
          return res
            .status(StatusCodes.UNAUTHORIZED)
            .send({
              Error:
                "O Depoimento deve conter: Autor, Descrição e Empresa como obrigatório.",
            });
        }

        return res.status(StatusCodes.CREATED).send({
          Sucess: "Depoiemnto Atualizado, obrigado!",
        });
      }
    } catch (error) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ error: "Erro ao cadastrar depoimento." });
    }
  }
}
