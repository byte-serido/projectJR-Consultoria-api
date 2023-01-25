import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { GetAllSolution } from "../../usercases/solutionsUserCases/getAllSolutions";
export const prisma = new PrismaClient();

export class DeleteSolutionController {
    async handle(req: Request, res: Response) {

        try {
            const { name } = req.body;
            const solutionDel = await prisma.solution.deleteMany({ where: { name: name } })

            if (!solutionDel) {
                return res.status(400).send({ error: "Solution not found" });
            }

            const getAllSolution = new GetAllSolution();
            const result = await getAllSolution.execute()

            return res.status(201).json(result);

        } catch (err) {
            return res.status(400).send({error:"Delete failed"});
        }

    };
}