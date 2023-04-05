import { Request, Response } from "express";
import { GetAllSolution } from "../../usercases/solutionsUserCases/getAllSolutions";
import { StatusCodes } from "http-status-codes";

export class GetAllSolutionController {

    async handle(req: Request, res: Response) {
        try {
            const getAllSolution = new GetAllSolution();
            const result = await getAllSolution.execute()

            if (!result) {
                return res.status(StatusCodes.PAYMENT_REQUIRED).send({ error: "Nenhuma solução cadastrada!" });
            }

            return res.status(StatusCodes.OK).json(result);

        } catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({ error: "Erro na busca por soluções" });
        }
    }
}