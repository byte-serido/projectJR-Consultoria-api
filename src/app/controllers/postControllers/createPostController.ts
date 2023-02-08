import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreatePost } from "../../usercases/postUserCases/createPost";

export const prisma = new PrismaClient;

export class CreatePostController {
    async handle(req: Request, res: Response) {
        const { title, description, autor, imgUrl } = req.body;

        try {

            if (await prisma.post.findUnique({
                where: {title: title}
            })) {
                return res.status(400).send({error: "Já existe um post com esse nome."})
            }

            if (title == 0 || autor == 0) {
                return res.status(400).send({
                    error: "O post precisa obrigatoriamente de titulo e autor."
                })
            }

            const create = new CreatePost();
            const post = await create.execute({
                title, description, autor, imgUrl
            });

            return res.send({
                post
            },);
        } catch (err) {
            return res.status(400).send({error: "O Post não foi criado."})
        }
    }
}