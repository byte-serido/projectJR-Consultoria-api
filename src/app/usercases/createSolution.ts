import { PrismaClient, Solution } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeSolution {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
}

export class CreateSolution {
    async execute({
        id,
        name,
        description,
        imgUrl,
    }: typeSolution): Promise<Solution> {

        const newSolution = await prisma.solution.create({

            data: {
                id: id,
                name: name,
                description: description,
                imgUrl: imgUrl,
            },

        });

        return newSolution;
    }
}