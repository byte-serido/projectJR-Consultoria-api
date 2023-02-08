import { CommentAux, Post, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetAllPost {
    handle(arg0: string, handle: any) {
        throw new Error("Method not implemented");
    }

    async execute(): Promise<Post[]> {


        const listPost = await prisma.post.findMany({
            
            select: {
                id: true,
                title: true,
                description: true,
                autor: true,
                imgUrl: true,
                created_at: true,
                updated_at: true,
                iterationOnPost: {
                    select: {
                        title: true,
                    },
                },
            },

        },);

        return listPost;
    }
}