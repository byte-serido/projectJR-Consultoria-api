import { Request, Response } from "express";
import { GetAllPost } from "../../usercases/postUserCases/getAllPost";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetAllPostController {
    async handle(req: Request, res: Response) {

        try {

            const getAllPost = new GetAllPost();
            const result = await getAllPost.execute()

            if (result.length == 0) {
                return res.status(407).send({ error: "Nenhum post criado" })
            }

            return res.status(201).json(result);

        } catch (err) {
            return res.status(400).send({ error: "Erro na busca por posts." })
        }
    }
}