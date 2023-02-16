import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateDepo } from "../../usercases/depositionsUserCases/updateDepo";

export const prisma = new PrismaClient();

export class UpdateDepos {
    async handle(req: Request, res: Response) {
        const { id, name, testimony, office, company, imgUrl } = req.body;

        try {

            if (await prisma.deposition.findMany({
                where: {
                    id: id,
                }
            })) {
                const updateDepo = new UpdateDepo();
                await updateDepo.execute({
                    id, name, testimony, office, company, imgUrl
                });

                if (name == 0 || testimony == 0 || company == 0) {
                    return res.status(410).send({ Error: "O Depoimento deve conter: Autor, Descrição e Empresa como obrigatório." })
                }

                return res.status(201).send({
                    Sucess: "Depoiemnto Atualizado, obrigado!"
                })
            }

        } catch (error) {
            return res.status(400).send({ error: "Erro ao cadastrar depoimento." });
        }
    }
}