import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateSolution } from "../usercases/createSolution";

export const prisma = new PrismaClient;

export class CreateSolutionController {
    async handle(req: Request, res: Response) {

        const { id, name, description, imgUrl } = req.body;
        
        try {
            if (await prisma.solution.findUnique({ where: { name: name } })) {
                return res.status(400).send({ error: "Solution already exists" })
            }

            const create = new CreateSolution();
            const solution = await create.execute({ id, name, description, imgUrl });

            return res.send({
                solution
            },);

        }   catch(err){
            return res.status(400).send(err);
        }  
    };
}