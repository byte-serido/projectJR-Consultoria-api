import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller Reset Passaword
 *
 *  Após recebimento do email do forgot passord, o usuário utiliza o token
 *  junto com o email e redefine a nova senha.
 *
 */

async function resetPassword(req: Request, res: Response) {
  const { email, token, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) return res.status(400).send({ error: "User not found" });

    // testando de so token é valido
    if (token !== user.token)
      return res.status(400).send({ error: "Token is not valid" });
    // pegando a hora atual
    const now = new Date();

    // testando se o tempo do token expirou
    if (now > user.expires) {
      return res
        .status(400)
        .send({ error: "Token expired, generate a new one" });
    }
    // atualizando o password e serando o token e o tempo de espirar
    const up = await prisma.user.update({
      where: { email: email },
      data: {
        password: password,
        token: "",
        expires: now,
      },
    });

    res.send();
  } catch (err) {
    res.status(400).send({ error: "Cannot reset password, try again" });
  }
}

export default resetPassword;
