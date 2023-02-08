import { PrismaClient, Comment } from "@prisma/client";

export const prisma = new PrismaClient();

export interface typeComment {
  authorName: string;
  text: string;
  posts: string;
}

export class CreateComment {
  async execute({ authorName, text, posts }: typeComment): Promise<Comment> {
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
