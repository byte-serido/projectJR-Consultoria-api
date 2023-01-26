import { Request, Response } from "express";
import { GetMembers } from "../../usercases/memberUsercases/getMembers";

export class GetMembersController{
    async handle(req: Request, res: Response){
        try{
            const getMembers = new GetMembers();
            const result = await getMembers.execute();
    
            return res.status(201).json(result);
        } catch(err){
            return res.status(400).send({error:"Membros ainda não foram cadastrados"});
        }
    }
}
