import { Request, Response } from "express";
import { GetMembers } from "../usercases/getMembers";

export class GetMembersController{
    async handle(req: Request, res: Response){
        const getMembers = new GetMembers();
        const result = await getMembers.execute();

        return res.status(201).json(result);
    }
}
