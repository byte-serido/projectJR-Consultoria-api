import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
export const prisma = new PrismaClient();

export class DeleteSolutionController {
    async handle(req: Request, res: Response) {

        try {
            const { name } = req.body;
            const solutionDel = await prisma.solution.delete({ where: { name: name } })

            if (!solutionDel) {
                return res.status(400).send({ error: "Solução Não Encontrada" });
            }

            if (name == 0) {
                return res.status(400).send({ error: "Solução Não Encontrada" });
            }

            return res.status(201).send({Success:"Solução Apagada"});

        } catch (err) {
            return res.status(400).send({error:"A Exclusão Falhou"});
        }

    };
}