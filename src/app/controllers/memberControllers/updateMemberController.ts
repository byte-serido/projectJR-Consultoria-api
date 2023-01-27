import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateMember } from "../../usercases/memberUsercases/updateMember";

export const prisma = new PrismaClient;

export class UpdateMemberController{
    async handle(req: Request, res: Response){
        const {id,name,registration,number,role,description,imgUrl} = req.body;
        try{
            if(await prisma.member.findUnique({where:{id:id}}))
            {
                const update = new UpdateMember();
                await update.execute({
                    id,name,registration,number,role,description,imgUrl
                });

                return res.status(201).send({sucess:"O membro foi alterado com sucesso!"});
            }
            
            return res.status(400).send({error:"Este Membro não existe"});
        } catch(err){
            return res.status(400).send({error:"Falha na atualização de Membro"});
        }
    };
}
