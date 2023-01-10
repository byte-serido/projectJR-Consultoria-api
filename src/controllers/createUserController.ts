import { Request, Response } from "express";
import { CreateUser } from "../modules/createUser";
import { PrismaClient} from "@prisma/client"
export const prisma = new PrismaClient;

const express = require('express')

export class CreateUserController{
    async handle(req: Request, res: Response){
        const {username,name,email,password,mod} = req.body;
        try{
             //Verificando se o usuário já existe
            if(await prisma.user.findUnique({where:{email:email}})){
                return res.status(400).send({error:"User already exists!"})
            }

            // Criando Usuario
            const create = new CreateUser();
            const result = await create.execute({username,name,email,password,mod});

            //Deixando a senha vazia para não retorna-la
            result.password = "";
            return res.send(result)
            
        }catch (err){
            return res.status(400).send({error:"Registration failed"});
        }
    };
}



