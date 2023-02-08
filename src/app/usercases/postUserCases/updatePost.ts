import { Post, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export interface typePost {
    id: string
    title: string;
    description: string;
    autor: string;
    imgUrl: string;
}

export class UpadatePost {
    async execute({
        id,
        title,
        description,
        autor,
        imgUrl,
    }:typePost): Promise<Post> {
        const upPost = await prisma.post.update({
            where: {
                id: id,
            },

            data: {
                title: title,
                description: description,
                autor: autor,
                imgUrl: imgUrl,
            },
        });

        return upPost;
    }
}