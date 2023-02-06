import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

export class DeletePost {
    async handle(req: Request, res: Response) {

        try {

            const { id } = req.body;

            await prisma.commentAux.deleteMany({
                where: {
                    posts: id,
                },
            },);

            await prisma.post.delete({
                where: {
                    id: id
                }
            },);

            return res.status(201).send({
                sucess: "Post foi apagado com sucesso!"
            });

        } catch (error) {
            return res.status(400).send(error);
        }
    }
}