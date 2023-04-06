import { Request, Response } from "express";
import { GetMembers } from "../../usercases/memberUsercases/getMembers";
import { StatusCodes } from "http-status-codes";

export class GetMembersController{
    async handle(req: Request, res: Response){
        try{
            const getMembers = new GetMembers();
            const result = await getMembers.execute();
            
            if(!Object.keys(result).length){
                return res.status(400).json({error:"Não há membros cadastrados"});
            }
            
            return res.status(StatusCodes.OK).json(result);
        } catch(err){
            return res.status(StatusCodes.BAD_REQUEST).send({error:"Não há membros cadastrados"});
        }
    }
}
