import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UpdateComment } from "../../usercases/commentUserCases/updateComment";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do UpdateComment
 *
 *  Antes de editar um comentário, ela testa se o comentário existe,
 *  se o comentário está com o autor ou se o texto está vazio.
 *
 *  Se correu tudo bem retorna o comentario e o status 200.
 *
 *  Se ocorreu algum erro no processo retorna status 400.
 *
 */
export class UpdateCommentController {
  async handle(req: Request, res: Response) {
    const { id, authorName, text, posts } = req.body;

    try {
      if (!(await prisma.comment.findUnique({ where: { id: id } }))) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Comentário não encontrado!" });
      }
      if (!text && !authorName) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ erro: "Insira um comentário de texto e o nome do autor!" });
      }
      if (!text) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira um comentário do texto!" });
      }
      if (!authorName) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ erro: "Insira um nome do autor!" });
      }

      const update = new UpdateComment();
      const comment = await update.execute({
        id,
        authorName,
        text,
        posts,
      });

      return res
<<<<<<< HEAD
        .status(200)
        .send({
          comment,
          sucess: "Atualização de comentário realizada com sucesso!",
        });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "A atualização do comentário falhou!" });
=======
        .status(StatusCodes.CREATED)
        .send({ comment, sucess: "Atualização de comentário realizada com sucesso!" });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).send({ error: "A atualização do comentário falhou!" });
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
    }
  }
}
