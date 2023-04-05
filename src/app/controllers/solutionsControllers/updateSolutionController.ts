import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateSolution } from "../../usercases/solutionsUserCases/updateSolution";
import { StatusCodes } from "http-status-codes";

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

                if (!name) {
                    return res.status(StatusCodes.UNAUTHORIZED).send({
                        error: "A solução deve ter titulo"
                    });
                }

                return res.status(StatusCodes.CREATED).send({ sucess: "Solução alterada com sucesso!" })
            }

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "A Edição Falhou," });
        }
    };
}