import { Member, PrismaClient } from "@prisma/client";
import { typeMember } from "./createMember";
export const prisma = new PrismaClient();

export class UpdateMember{
    async execute({name,registration,number,role,description,imgUrl}:typeMember): Promise<Member>{
        const updMember = await prisma.member.update({
            where:{
                registration: registration,
            },
            
            data:{
                name,
                number,
                role,
                description,
                imgUrl
            },
        });
        
        return updMember;
    }
}
