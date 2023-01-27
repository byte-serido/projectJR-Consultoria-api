import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateSolution } from "../../usercases/solutionsUserCases/createSolution";

export const prisma = new PrismaClient;

export class CreateSolutionController {
    async handle(req: Request, res: Response) {

        const { name, description, imgUrl } = req.body;

        try {
            if (await prisma.solution.findUnique({ where: { name: name } })) {
                return res.status(400).send({ error: "A Solução Já Existe" })
            }

            if (name == 0 ) {
                return res.status(400).send({ error: "Por favor adicione um nome na solução" })
            }

            const create = new CreateSolution();
            const solution = await create.execute({ name, description, imgUrl });

            return res.send({
                solution
            },);

        } catch (err) {
            return res.status(400).send({error:"O Cadastro Falhou"});
        }
    };
}