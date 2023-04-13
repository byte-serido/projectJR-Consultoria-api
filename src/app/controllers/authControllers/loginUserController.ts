import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../config/generateToken";
export const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

/**
 *  Essa é a classe controller da autenticação
 *
 *  Ela confirma se o usuário existe, comapara as senhas e retorna
 *  o usuário e o token gerado.
 *
 */
export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    //confirmando se o username existe
    if (!user) return res.status(401).send({ error: "User not found" });

    //comparando as senhas
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid password" });

    //Deixando senha vazia pra ninguem ver
    user.password = "";

    return res.status(201).send({
      user,
      token: generateToken({ id: user.id }),
    });
  }
}
