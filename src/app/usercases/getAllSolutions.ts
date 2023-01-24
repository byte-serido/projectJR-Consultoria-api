import { Solution, PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();


export class GetAllSolution {
    handle(arg0: string, handle: any) {
        throw new Error("Method not implemented");
    }

    async execute(): Promise<Solution[]> {
        const listSolutions = await prisma.solution.findMany({

            select: {
                name: true,
                description: true,
                imgUrl: true,
            },
        });

        return listSolutions;
    }
}