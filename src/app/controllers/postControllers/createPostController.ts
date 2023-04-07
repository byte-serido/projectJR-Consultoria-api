import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreatePost } from "../../usercases/postUserCases/createPost";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do CreatePost
 *
 *  Antes de criar uma nova postagem, ela testa se a postagem existe e
 *  se tem alguma informação vazia, caso exista ou tenha alguma
 *  informação vazia retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem retorna a postagem e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 *
 */
export class CreatePostController {
  async handle(req: Request, res: Response) {
    const { title, description, autor, imgUrl } = req.body;

    try {
      if (
        await prisma.post.findUnique({
          where: { title: title },
        })
      ) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ error: "Já existe um post com esse nome." });
      }

      if (!title || !autor) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          error: "O post precisa obrigatoriamente de titulo e autor.",
        });
      }

      const create = new CreatePost();
      const post = await create.execute({
        title,
        description,
        autor,
        imgUrl,
      });

      return res.status(StatusCodes.CREATED).send({
        post,
      });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "O Post não foi criado." });
    }
  }
}
