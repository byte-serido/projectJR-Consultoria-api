import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpadatePost } from "../../usercases/postUserCases/updatePost";
import { StatusCodes } from "http-status-codes";

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

                if (!title) {
                    return res.status(StatusCodes.UNAUTHORIZED).send({
                        error: "O post deve ter titulo"
                    });
                }

                return res.status(StatusCodes.CREATED).send({ sucess: "Post foi atualizado com sucesso!" })

            }
            
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro na atualização da postagem"}
            );
        }
    };
}