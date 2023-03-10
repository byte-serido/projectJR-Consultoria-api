import { PrismaClient, Solution } from "@prisma/client";
export const prisma = new PrismaClient();

interface typeSolution {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
}

export class UpdateSolution {
    async execute({
        id,
        name,
        description,
        imgUrl,
    }: typeSolution): Promise<Solution> {
        const upSolution = await prisma.solution.update({
            where: {
                id: id,
            },

            data: {
                name: name,
                description: description,
                imgUrl: imgUrl,
            },


        });

        return upSolution;
    }
}