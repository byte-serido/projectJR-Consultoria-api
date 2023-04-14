import { Request, Response } from "express";
import { PrismaClient, Post } from "@prisma/client";
import { CreateComment } from "../../usercases/commentUserCases/createComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { authorName, text, posts } = req.body;

    try {
      if (!(await prisma.post.findUnique({ where: { id: posts } }))) {
        return res.status(StatusCodes.BAD_REQUEST).send({ erro: "A postagem não existe!" });
      }

      if (!text && !authorName) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ erro: "Insira um comentário de texto e autor" });
      }
      if (!text) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira um comentário do texto!" });
      }
      if (!authorName) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira o nome do autor!" });
      }

      const create = new CreateComment();
      const comment = await create.execute({
        authorName,
        text,
        posts,
      });

      return res.status(StatusCodes.CREATED).send({
        comment,
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({ error: "Não foi possivel realizar comentário!" });
    }
  }
}
