import { Member, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetMembers{
    async execute(): Promise<Member[]>{
        const listMembers = await prisma.member.findMany({

            select:{
                name: true,
                registration: true,
                number: true,
                role: true,
                description: true,
                imgUrl: true
            },
        });

        return listMembers;
    }
}
