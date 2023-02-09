import { PrismaClient, User } from "@prisma/client";

export const prisma = new PrismaClient();

export interface typeUser {
  id: string;
  username:string;
  password:string;
  email: string;
  name: string;
  mod: string;
}

export class UpdateUser {
  async execute({
    id,
    email,
    name,
    username,
    password,
    mod,
  }: typeUser): Promise<User> {
    
    //Criptografando a senha
    const bcrypt = require("bcryptjs");
    const hash = await bcrypt.hash(password, 10);
    password = hash;

    //update user
    const updatedContact = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: email,
        name: name,
        username: username,
        mod:mod,
        password: password,
      },
    });

    return updatedContact;
  }
}