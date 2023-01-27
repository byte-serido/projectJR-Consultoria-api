import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
export const prisma = new PrismaClient();

export class DeleteSolutionController {
    async handle(req: Request, res: Response) {

        try {
            const { id } = req.body;
            await prisma.solution.delete({ where: { id: id } });

            return res.status(201).send({success:"Solução apagada com sucesso!"});

        } catch (err) {
            return res.status(400).send({error:"A Exclusão Falhou, por favor tente novamente em alguns minutos!"});
        }

    };
}