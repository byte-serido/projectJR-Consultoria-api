import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateSolution } from "../../usercases/solutionsUserCases/updateSolution";

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

                if (name == 0) {
                    return res.status(400).send({ error: "Por favor, adicione um nome na solução" })    
                }
                
                const update = new UpdateSolution();
                const solution = await update.execute({
                    id, name, description, imgUrl
                });

                return res.send({ solution })
            }

        } catch (err) {
            return res.status(400).send({error:"A Edição Falhou"});
        }
    };
}