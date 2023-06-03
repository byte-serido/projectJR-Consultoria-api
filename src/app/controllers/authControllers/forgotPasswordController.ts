import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import crypto from "crypto";
const mailer = require("../../middlewares/mailer");

export const prisma = new PrismaClient();

export class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email: email } });

      if (!user) {
        return res.status(400).send({ error: "User not found" });
      }

      //geração de token
      const token = crypto.randomBytes(20).toString("hex");

      //tempo de expiração do token
      const now = new Date();
      //pega a hora de agora mais uma
      now.setHours(now.getHours() + 1);

      //alterar usuário
      await prisma.user.updateMany({
        where: {
          email: email,
        },
        data: {
          passwordResetToken: token,
          passwordResetExpires: now,
        },
      });

      mailer.sendMail(
        {
          to: email,
          from: "Flavio Softs ltda. <softsflavio@gmail.com>",
          subject: "Recuperar email",
          template: "auth/forgot_password",
          context: { token },
        },
        (err) => {
          if (err) {
            console.log(err);
            return res
              .status(400)
              .send({ error: "Não pode enviar o email de forgot password" });
          }

          return res.send();
        }
      );
    } catch (error) {
      res
        .status(400)
        .send({ error: "Esso no forgot password, tente novamente" });
    }
  }
}
