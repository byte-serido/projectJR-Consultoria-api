import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma= new PrismaClient();

export class DeletMemberController{
    async handle(req: Request, res: Response){
        try{

            if(!req.body.registration){
                return res.status(400).send({error:"Falha na exclusão de Membro"})
            }
            const {registration} = req.body;
            
            const delMember = await prisma.member.delete({
                where:{
                    registration:registration
                },
            });


            return res.status(201).send("Sucesso");
        } catch(err){
            return res.status(400).send({error:"Falha na exclusão de Membro"});
        }
        
    };
}
