import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client"
import { generateToken } from "../../../config/generateToken";
import { StatusCodes } from "http-status-codes";
export const prisma = new PrismaClient;
const bcrypt = require("bcryptjs");

export class LoginUserController{
    async handle(req: Request, res: Response){
        const {username,password} = req.body;
        const user = await prisma.user.findUnique({where:{username:username}})
        
        //confirmando se o username existe
        if(!user)
            return res.status(StatusCodes.BAD_REQUEST).send({error:"User not found"});

        //comparando as senhas
        if(!await bcrypt.compare(password, user.password))
            return res.status(StatusCodes.BAD_REQUEST).send({error:"Invalid password"});
        
        //Deixando senha vazia pra ninguem ver
        user.password = "";

        return res.status(StatusCodes.OK).send({ 
            user, 
            token: generateToken({id: user.id})
        });
    };
}