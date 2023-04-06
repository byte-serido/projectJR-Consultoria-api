import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { GetAllContacts } from "../../usercases/contactUserCases/getAllContacts";
import {StatusCodes} from "http-status-codes"

export const prisma = new PrismaClient();

export class GetAllContactsController {
  async handle(req: Request, res: Response) {
    try {
      const getAllContacts = new GetAllContacts();
      const result = await getAllContacts.execute();

      if (!result) {
        return res
          .status(StatusCodes.PAYMENT_REQUIRED)
          .send({ error: "Não existe contatos cadastrados" });
      }

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      return res.status(400).send({ error: "Não existe contatos cadastrados" });
    }
  }
}
