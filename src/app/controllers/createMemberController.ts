import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateMember } from "../usercases/createMember";

export const prisma = new PrismaClient;

export class CreateMemberController{
    async handle(req: Request, res: Response){
        const {name,registration,number,role,description,imgUrl} = req.body;
        try{
            if(await prisma.member.findUnique({where:{registration:registration}})){
                return res.status(400).send({error:"Membro já existente"})
            }

            const create = new CreateMember();
            const member = await create.execute({name,registration,number,role,description,imgUrl});
        
            return res.send({
                member,
            },);
        } catch(err){
            return res.status(400).send({error:"Falha no Registro de membro"});
        }
    };
}
