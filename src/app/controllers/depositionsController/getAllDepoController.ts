import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { GetAllDepo } from "../../usercases/depositionsUserCases/getAllDepo";

export const prisma = new PrismaClient();

export class GelAllDepoController {
    async handle(req: Request, res: Response) {

        try {

            const getAllDepo = new GetAllDepo();
            const result = await getAllDepo.execute()

            if (result.length == 0) {
                return res.status(410).send({ error: "Nenhum depoimento cadastrado" })
            }

            return res.status(201).json(result);

        } catch (error) {
            return res.status(400).send({
                error: "Erro na busca por depoimentos,"
            })
        }
    }
}