import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client"
import { generateToken } from "../../../config/generateToken";
import { CreateUser } from "../../usercases/userUserCases/createUser";


export const prisma = new PrismaClient;

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
            const user = await create.execute({username,name,email,password,mod});

            //Deixando a senha vazia para não retorna-la
            user.password = "";

            return res.send({
                user,
                token: generateToken({id: user.id})
            },);
            
        }catch (err){
            return res.status(400).send({error:"Registration failed"});
        }
    };
}



