import { PrismaClient, Comment } from "@prisma/client";

export const prisma = new PrismaClient();

export interface typePost {
  authorName: string;
  text: string;
  posts: string;
}

export class CreatePost {
  async execute({ authorName, text, posts }: typePost): Promise<Comment> {
    const newComment = await prisma.comment.create({
      data: {
        authorName: authorName,
        text: text,
        posts: posts,
      },
    });

    return newComment;
  }
}
