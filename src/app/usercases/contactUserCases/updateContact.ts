import { PrismaClient, Contact } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeContact {
  id: string;
  email: string;
  nome: string;
  empresa: string;
  numero: string;
  proposta: string;
}

export class UpdateContact {
  async excute({
    id,
    email,
    nome,
    empresa,
    numero,
    proposta,
  }: typeContact): Promise<Contact> {
    const updatedContact = await prisma.contact.update({
      where: {
        id: id,
      },
      data: {
        email: email,
        nome: nome,
        empresa: empresa,
        numero: numero,
        proposta: proposta,
      },
    });

    return updatedContact;
  }
}
