import { PrismaClient, Contact } from "@prisma/client";
const prisma = new PrismaClient();

export interface typeContact {
  id: string;
}

export class DeleteContact {
  async execute({ id }: typeContact): Promise<Contact> {
    const deleteContact = await prisma.contact.delete({
      where: {
        id: id,
      },
    });

    return deleteContact;
  }
}
