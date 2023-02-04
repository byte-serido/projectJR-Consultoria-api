import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpadatePost } from "../../usercases/postUserCases/updatePost";

export const prisma = new PrismaClient();

export class UpdatePost {
    async handle(req: Request, res: Response) {

        const { id, title, description, autor, imgUrl, } = req.body;

        try {

            if (await prisma.post.findMany({
                where: {
                    id: id,
                }

            })) {

                const UpdatePost = new UpadatePost();
                await UpdatePost.execute({
                    id, title, description, autor, imgUrl
                });

                return res.send({ sucess: "Post foi atualizado com sucesso!" })

            }

        } catch (error) {
            return res.status(400).send({
                error: "Falha no update do post."
            });
        }
    };

}