import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

export class DeleteDepoController {
    async handle(req: Request, res: Response) {

        try {

            const { id } = req.body;

            await prisma.deposition.delete({
                where: {
                    id: id,
                },
            },);

            return res.status(201).send({
                sucess: "Depoimento Apagado com Sucesso!"
            });

        } catch (error) {
            return res.status(400).send({
                error: "Não foi possível apagar o depoimento!"
            });
        }
    }
}