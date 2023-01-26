import { PrismaClient, Contact } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeContact {
  email: string;
  nome: string;
  empresa: string;
  numero: string;
  proposta: string;
}

export class CreateContact {
  async execute({
    email,
    nome,
    empresa,
    numero,
    proposta,
  }: typeContact): Promise<Contact> {
    const newContact = await prisma.contact.create({
      data: {
        email: email,
        nome: nome,
        empresa: empresa,
        numero: numero,
        proposta: proposta,
      },
    });

    return newContact;
  }
}
