import { PrismaClient, Member } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeMember{
    name: string,
    number: string,
    role: string,
    description: string,
    imgUrl: string
}

export class CreateMember{
    async execute({name,number,role,description,imgUrl}:typeMember): Promise <Member>{
        const newMember = await prisma.member.create({
            data: {
                name: name,
                number: number,
                role: role,
                description: description,
                imgUrl: imgUrl,
            },
        });

        return newMember;
    }
}
