import { Router } from "express";
import { CreateCommentController } from "../app/controllers/commentControllers/createCommentController";
import { DeleteCommentController } from "../app/controllers/commentControllers/deleteCommentController";
import { GetAllCommentsController } from "../app/controllers/commentControllers/getAllCommentsController";
import { UpdateCommentController } from "../app/controllers/commentControllers/updateCommentController";
import { GetOneCommentController } from "../app/controllers/commentControllers/getOneCommentController";

const commentRoutes = Router();

const createComment = new CreateCommentController();
const getAllComments = new GetAllCommentsController();
const updateComment = new UpdateCommentController();
const deleteComment = new DeleteCommentController();
const getOneComment = new GetOneCommentController();

commentRoutes.post("/create", createComment.handle);
commentRoutes.get("/getall", getAllComments.handle);
commentRoutes.put("/update", updateComment.handle);
commentRoutes.delete("/delete", deleteComment.handle);
commentRoutes.get("/getone:id", getOneComment.handle);

export { commentRoutes };
