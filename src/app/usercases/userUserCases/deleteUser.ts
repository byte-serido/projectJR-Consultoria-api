import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export interface typeUser {
  id: string;
}

export class DeleteUser {
  async execute({ id }: typeUser): Promise<User> {
    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return deleteUser;
  }
}