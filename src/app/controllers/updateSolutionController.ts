import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateSolution } from "../usercases/updateSolution";

export const prisma = new PrismaClient();

export class UpdateSolutionController {
    async handle(req: Request, res: Response) {

        const { id, name, description, imgUrl } = req.body;

        try {
            if (await prisma.solution.findMany({
                where: {
                    id: id
                }
            })) {
                const update = new UpdateSolution();
                const solution = await update.execute({
                    id, name, description, imgUrl
                });

                return res.send({ solution })
            }

            return res.status(400).send({ error: "Solution not exists" })

        } catch (err) {
            return res.status(400).send(err);
        }
    };
}