import { Request, Response } from "express";
import { GetAllPost } from "../../usercases/postUserCases/getAllPost";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class GetAllPostController {
    async handle(req: Request, res: Response) {

        try {

            const getAllPost = new GetAllPost();
            const result = await getAllPost.execute()

            if (!result) {
                return res.status(StatusCodes.BAD_REQUEST).send({ error: "Nenhum post criado" })
            }

            return res.status(StatusCodes.OK).json(result);

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro na amostragem de post"})
        }
    }
}