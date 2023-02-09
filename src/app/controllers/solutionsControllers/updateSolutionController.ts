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

                const update = new UpdateSolution();
                await update.execute({
                    id, name, description, imgUrl
                });

                if (name == 0) {
                    return res.status(409).send({
                        error: "A solução deve ter titulo"
                    });
                }

                return res.status(201).send({ sucess: "Solução alterada com sucesso!" })
            }

        } catch (err) {
            return res.status(400).send({ error: "A Edição Falhou," });
        }
    };
}