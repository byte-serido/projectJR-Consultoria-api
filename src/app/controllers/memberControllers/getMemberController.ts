import { Request, Response } from "express";
import { GetMembers } from "../../usercases/memberUsercases/getMembers";

export class GetMembersController{
    async handle(req: Request, res: Response){
        try{
            const getMembers = new GetMembers();
            const result = await getMembers.execute();
            
            if(!Object.keys(result).length){
                return res.status(400).json({error:"Não há membros cadastrados"});
            }
            
            return res.status(200).json(result);
        } catch(err){
            return res.status(400).send({error:"Não há membros cadastrados"});
        }
    }
}
