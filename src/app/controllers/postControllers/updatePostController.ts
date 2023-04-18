import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UpadatePost } from "../../usercases/postUserCases/updatePost";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient();

/**
 *  Essa é a classe controller do UpdatePost
 *
 *  Antes de editar uma postagem, ela testa se a postagem existe,
 *  e se tem o titulo vazio, caso exista titulo vazio ou
 *  não exita a postagem retorna status:
 *  UNAUTHORIZED = 401
 *
 *  Se correu tudo bem, retorna o depoimento e status:
 *  CREATED = 201
 *
 *  Se ocorreu algum erro no processo retorna status:
 *  BAD_REQUEST = 400
 */
export class UpdatePost {
  async handle(req: Request, res: Response) {
    const { id, title, description, autor, imgUrl } = req.body;

    try {
      if (
        await prisma.post.findMany({
          where: {
            id: id,
          },
        })
      ) {
        const UpdatePost = new UpadatePost();
        await UpdatePost.execute({
          id,
          title,
          description,
          autor,
          imgUrl,
        });

<<<<<<< HEAD
        if (!title) {
          return res.status(StatusCodes.UNAUTHORIZED).send({
            error: "O post deve ter titulo",
          });
=======
        try {

            if (await prisma.post.findMany({
                where: {
                    id: id,
                }

            })) {

                const UpdatePost = new UpadatePost();
                await UpdatePost.execute({
                    id, title, description, autor, imgUrl
                });

                if (!title) {
                    return res.status(StatusCodes.UNAUTHORIZED).send({
                        error: "O post deve ter titulo"
                    });
                }

                return res.status(StatusCodes.CREATED).send({ sucess: "Post foi atualizado com sucesso!" })

            }
            
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro na atualização da postagem"}
            );
>>>>>>> 3bdc902bcb87c8289c49b418db66dc40f5a0359d
        }

        return res
          .status(StatusCodes.CREATED)
          .send({ sucess: "Post foi atualizado com sucesso!" });
      }
    } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "Erro na atualização da postagem" });
    }
  }
}
