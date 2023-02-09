import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { GetAllComments } from "../../usercases/commentUserCases/getAllComments";

export const prisma = new PrismaClient();

export class GetAllCommentsController {
  async handle(req: Request, res: Response) {
    try {
      const getAllComments = new GetAllComments();
      const result = await getAllComments.execute();

      if (!result) {
        return res.status(400).send({ error: "Commests does not exists !" });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send({ error: "Comments failed" });
    }
  }
}
