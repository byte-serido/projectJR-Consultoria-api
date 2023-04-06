import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class DeletePost {
    async handle(req: Request, res: Response) {

        try {

            const { id } = req.body;

            await prisma.comment.deleteMany({
                where: {
                    posts: id,
                },
            },);

            await prisma.post.delete({
                where: {
                    id: id
                }
            },);

            return res.status(StatusCodes.CREATED).send({
                sucess: "Post foi apagado com sucesso!"
            });

        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "Não foi possível apagar esse post." });
        }
    }
}