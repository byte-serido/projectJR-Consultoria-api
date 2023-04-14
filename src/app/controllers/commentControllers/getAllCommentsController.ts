import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { GetAllComments } from "../../usercases/commentUserCases/getAllComments";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

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
