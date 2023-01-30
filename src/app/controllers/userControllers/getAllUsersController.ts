import { Request, Response } from "express";
import { GetUsers } from "../../usercases/userUserCases/getAllUser";


export class GetUserController{
    async handle(req: Request, res: Response){
        try{
            const getUsers = new GetUsers;
            const result = await getUsers.execute();
            
            if(!Object.keys(result).length){
                return res.status(400).json({error:"Não há usuários cadastrados"});
            }
            
            return res.status(201).json(result);
        } catch(err){
            return res.status(400).send({error:"Não há usuários cadastrados"});
        }
    }
}