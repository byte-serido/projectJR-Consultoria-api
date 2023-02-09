import { PrismaClient, User } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeUser {
  username: string;
  email: string;
  password: string;
  name: string;
  mod: string;
}

export class CreateUser {
  async execute({
    name,
    email,
    username,
    password,
    mod,
  }: typeUser): Promise<User> {
    //Criptografando a senha
    const bcrypt = require("bcryptjs");
    const hash = await bcrypt.hash(password, 10);
    password = hash;

    //Criar usuário
    const newUser = await prisma.user.create({
      data: {
        username: username,
        name: name,
        email: email,
        password: password,
        mod: mod,
      },
    });

    return newUser;
  }
}
