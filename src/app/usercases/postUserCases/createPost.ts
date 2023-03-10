import { Post, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

interface typePost {

    title: string;
    description: string;
    autor: string;
    imgUrl: string;

}

export class CreatePost {
    async execute({
        title,
        description,
        autor,
        imgUrl,
    }: typePost): Promise<Post> {
        const newPost = await prisma.post
            .create({

                data: {
                    title: title,
                    description: description,
                    autor: autor,
                    imgUrl: imgUrl,
                },
            });

        return newPost;
    }
}