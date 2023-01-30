import { PrismaClient, Contact } from "@prisma/client";
export const prisma = new PrismaClient();

export class GetAllContacts {
  async execute(): Promise<Contact[]> {
    const allContacts = await prisma.contact.findMany({
      orderBy: {
        email: "asc",
      },
    });

    return allContacts;
  }
}
