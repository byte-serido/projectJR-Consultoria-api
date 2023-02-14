import { Request, Response } from "express";
import { GetAllSolution } from "../../usercases/solutionsUserCases/getAllSolutions";

export class GetAllSolutionController {

    async handle(req: Request, res: Response) {
        try {
            const getAllSolution = new GetAllSolution();
            const result = await getAllSolution.execute()

            if (result.length == 0) {
                return res.status(403).send({ error: "Nenhuma solução cadastrada!" });
            }

            return res.status(201).json(result);

        } catch (err) {
            return res.status(400).send({ error: "Nenhuma solução cadastrada!" });
        }
    }
}