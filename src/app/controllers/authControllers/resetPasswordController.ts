import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

async function resetPassword(req: Request, res: Response) {
  const { email, token, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) return res.status(400).send({ error: "User not found" });

    if (token !== user.token)
      return res.status(400).send({ error: "Token is not valid" });

    const now = new Date();

    if (now > user.expires)
      return res
        .status(400)
        .send({ error: "Token expired, generate a new one" });

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
