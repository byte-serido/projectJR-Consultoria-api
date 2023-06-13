import { Request, Response } from "express";
import crypto from "crypto";
const mailer = require("../../../modules/mailer");

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller Forgot Passaword
 *
 *  Ela envia email para o usuário com o token para
 *  recuperar a senha.
 *
 */

async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    // Geração de token
    const token = crypto.randomBytes(3).toString("hex");

    // Tempo de expiração do token
    const now = new Date();
    // Pega a hora de agora mais uma hora
    now.setHours(now.getHours() + 1);

    // Alterar usuário
    const up = await prisma.user.update({
      where: { email: email },
      data: {
        token: token,
        expires: now,
      },
    });

    // o envio de email com token
    mailer.sendMail(
      {
        to: email,
        from: "Recuperar Senha <softsflavio@gmail.com>",
        subject: "Recuperar Senha",
        template: "auth/forgot_password",
        context: { token },
        html: `<p>Recupere sua senha com este token: </p><br>
              <h1>${token}</h1>`,
      },
      (err: any) => {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .send({ error: "Não pode enviar o email de forgot password" });
        }

        return res.status(200).send({ menssage: "Email enviado com sucesso!" });
      }
    );
  } catch (error) {
    res.status(400).send({ error: "Erro no forgot password, tente novamente" });
  }
}

export default forgotPassword;
