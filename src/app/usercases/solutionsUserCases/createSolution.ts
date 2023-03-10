import { PrismaClient, Solution } from "@prisma/client";
export const prisma = new PrismaClient();

interface typeSolution {
    name: string;
    description: string;
    imgUrl: string;
}

export class CreateSolution {
    async execute({
        name,
        description,
        imgUrl,
    }: typeSolution): Promise<Solution> {

        const newSolution = await prisma.solution.create({

            data: {
                name: name,
                description: description,
                imgUrl: imgUrl,
            },

        });

        return newSolution;
    }
}