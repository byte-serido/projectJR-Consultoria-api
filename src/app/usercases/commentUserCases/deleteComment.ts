import { PrismaClient, Comment } from "@prisma/client";
const prisma = new PrismaClient();

export interface typeComment {
  id: string;
}

export class DeleteComment {
  async execute({ id }: typeComment): Promise<Comment> {
    const deleteComment = await prisma.comment.delete({
      where: {
        id: id,
      },
    });

    return deleteComment;
  }
}
