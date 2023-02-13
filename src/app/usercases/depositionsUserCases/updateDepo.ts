import { Deposition, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export interface typeDepo {
    id: string;
    name: string;
    testimony: string;
    office: string;
    company: string;
    imgUrl: string;
}

export class UpdateDepo {
    async execute({
        id,
        name,
        testimony,
        office,
        company,
        imgUrl,
    }: typeDepo): Promise<Deposition> {
        const upDepo = await prisma.deposition.update({
            where: {
                id: id,
            },

            data: {
                name: name,
                testimony: testimony,
                office: office,
                company: company,
                imgUrl: imgUrl,
            },
        },);

        return upDepo;

    }
}