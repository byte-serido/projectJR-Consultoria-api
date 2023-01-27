import { PrismaClient, Member } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeMember{
    id:string,
    name: string,
    registration: string,
    number: string,
    role: string,
    description: string,
    imgUrl: string
}

export class CreateMember{
    async execute({name,registration,number,role,description,imgUrl}:typeMember): Promise <Member>{
        const newMember = await prisma.member.create({
            data: {
                name: name,
                registration: registration,
                number: number,
                role: role,
                description: description,
                imgUrl: imgUrl,
            },
        });

        return newMember;
    }
}
