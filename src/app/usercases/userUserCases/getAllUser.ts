import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetUsers {
  async execute() {
    const listUsers = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        mod: true,
        password: true,
        created_at: true,
        updated_at: true,
      },
    });

    return listUsers;
  }
}
