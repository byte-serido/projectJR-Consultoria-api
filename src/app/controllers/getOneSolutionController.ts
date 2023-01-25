import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

export class GetOneSolutionController {
    async handle(req: Request, res:Response) {
        try {

            const { name } = req.body
            const solutionOne = await prisma.solution.findMany({ 

                where: {
                    name:name,
                },

                select: {
                    id: true,
                    name:true,
                    description:true,
                    imgUrl:true,
                }

            })

            return res.status(201).json(solutionOne);

        } catch(err) {
            return res.status(400).send(err);
            // The solution with that name does not exist
        }
    }
}