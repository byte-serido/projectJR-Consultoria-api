import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateMember } from "../usercases/updateMember";

export const prisma = new PrismaClient;

export class UpdateMemberController{
    async handle(req: Request, res: Response){
        const {name,registration,number,role,description,imgUrl} = req.body;
        try{
            if(await prisma.member.findUnique({where:{registration:registration}}))
            {
                
                const update = new UpdateMember();
                const member = await update.execute({
                    name,registration,number,role,description,imgUrl
                });

                return res.send({member});
            }
            
            return res.status(400).send({error:"Member does not exist"});
        } catch(err){
            return res.status(400).send({error:"Update failed"});
        }
    };
}
