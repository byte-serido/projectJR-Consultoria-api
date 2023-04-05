import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreatePost } from "../../usercases/postUserCases/createPost";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient;

export class CreatePostController {
    async handle(req: Request, res: Response) {
        const { title, description, autor, imgUrl } = req.body;

        try {

            if (await prisma.post.findUnique({
                where: { title: title }
            })) {
                return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Já existe um post com esse nome." })
            }

            if (!title || !autor) {
                return res.status(StatusCodes.UNAUTHORIZED).send({
                    error: "O post precisa obrigatoriamente de titulo e autor."
                })
            }

            const create = new CreatePost();
            const post = await create.execute({
                title, description, autor, imgUrl
            });

            return res.status(StatusCodes.CREATED).send({
                post
            },);
        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "O Post não foi criado." })
        }
    }
}