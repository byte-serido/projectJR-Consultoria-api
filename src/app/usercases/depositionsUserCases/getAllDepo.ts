import { Deposition, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetAllDepo {
    handle(arg0: string, handle: any) {
        throw new Error("Method not implemented");
    }

    async execute(): Promise<Deposition[]> {

        const listDepo = await prisma.deposition.findMany({

            select: {
                id: true,
                name: true,
                testimony: true,
                office: true,
                company: true,
                imgUrl: true,
            },
        },);
        return listDepo;
    }
}