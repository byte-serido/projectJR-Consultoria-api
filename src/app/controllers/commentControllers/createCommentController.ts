import { Request, Response } from "express";
import { PrismaClient, Post } from "@prisma/client";
import { CreateComment } from "../../usercases/commentUserCases/createComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreateComment
 *
 *  Antes de criar um novo comentário, ela testa se o comentário existe,
 *  se o comentário está com o autor ou se o texto está vazio.
 *
 *  Se correu tudo bem retorna o comentario e o status 200.
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
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
      return res
        .status(400)
        .send({ error: "Não foi possivel realizar comentário!" });
    }
  }
}
