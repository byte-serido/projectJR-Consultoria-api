import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { GetAllComments } from "../../usercases/commentUserCases/getAllComments";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do GetAllComment
 *
 *  Antes de listar todos os comentários, ela testa se os comentários existem.
 *
 *  Se correu tudo bem retorna todos os comentários e o status 200.
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
export class GetAllCommentsController {
  async handle(req: Request, res: Response) {
    try {
      const getAllComments = new GetAllComments();
      const result = await getAllComments.execute();

      if (!result) {
        return res.status(StatusCodes.BAD_REQUEST).send({ error: "Comentario não existe!" });
      }

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({ error: "Falha nos comentários." });
    }
  }
}
