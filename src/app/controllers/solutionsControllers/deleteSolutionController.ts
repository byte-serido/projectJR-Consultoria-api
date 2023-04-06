import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
export const prisma = new PrismaClient();

export class DeleteSolutionController {
    async handle(req: Request, res: Response) {

        try {
            const { id } = req.body;
            await prisma.solution.delete({ where: { id: id } });

            return res.status(StatusCodes.CREATED).send({ success: "Solução apagada com sucesso!" });

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "A Exclusão Falhou, por favor tente novamente em alguns minutos!" });
        }

    };
}