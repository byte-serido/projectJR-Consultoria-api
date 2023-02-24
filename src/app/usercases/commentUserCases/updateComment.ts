import { PrismaClient, Comment } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeComment {
  id: string;
  authorName: string;
  text: string;
  posts: string;
}

export class UpdateComment {
  async execute({
    id,
    authorName,
    text,
    posts,
  }: typeComment): Promise<Comment> {
    const updatedComment = await prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        authorName: authorName,
        text: text,
        posts: posts,
      },
    });

    return updatedComment;
  }
}
