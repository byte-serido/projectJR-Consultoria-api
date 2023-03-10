import { Deposition, PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();

interface typeDepo {
    name: string;
    testimony: string;
    office: string;
    company: string;
    imgUrl: string;
}

export class CreateDepo {
    async execute({
        name,
        testimony,
        office,
        company,
        imgUrl,
    }: typeDepo): Promise<Deposition> {

        const newDepo = await prisma.deposition.create({

            data: {
                name: name,
                testimony: testimony,
                office: office,
                company: company,
                imgUrl: imgUrl,
            },
        });

        return newDepo;
    }
}