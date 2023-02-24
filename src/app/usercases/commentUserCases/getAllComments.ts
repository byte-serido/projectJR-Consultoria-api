import { PrismaClient, Contact, Comment } from "@prisma/client";
export const prisma = new PrismaClient();

export class GetAllComments {
  async execute(): Promise<Comment[]> {
    const allComments = await prisma.comment.findMany({
      orderBy: {
        data_up: "asc",
      },
    });

    return allComments;
  }
}
