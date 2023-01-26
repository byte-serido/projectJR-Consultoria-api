import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma= new PrismaClient();

export class DeletMemberController{
    async handle(req: Request, res: Response){
        const{registration} = req.body;
        const delMember = await prisma.member.deleteMany({
            where:{
                registration
            },
        });

        return res.status(201).send("Sucesso");
    }
}
