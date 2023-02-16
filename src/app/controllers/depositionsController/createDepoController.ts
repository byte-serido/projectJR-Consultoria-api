import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateDepo } from "../../usercases/depositionsUserCases/createDepo";

export const prisma = new PrismaClient();

export class CreateDepoController {
    async handle(req: Request, res: Response) {
        const {
            name, testimony, office, company, imgUrl
        } = req.body;

        try {
            
            if (name == 0 || testimony == 0 || company == 0) {
                return res.status(410).send({error: "Preencha as informações vazias"})
            }

            const create = new CreateDepo();
            const depo = await create.execute({ name, testimony, office, company, imgUrl });

            return res.status(201).send({
                depo
            },);

        } catch (error) {
            return res.status(400).send(error)
        }
    }
}