import { Request, Response } from "express";
import { GetAllSolution } from "../usercases/getAllSolutions";

export class GetAllSolutionController {

    async handle(req: Request, res: Response) {

        const getAllSolution = new GetAllSolution();
        const result = await getAllSolution.execute()
        
        return res.status(201).json(result);
    }
}