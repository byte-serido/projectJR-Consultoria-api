import { Router } from "express";
import { CreateCommentController } from "../app/controllers/commentControllers/createCommentController";
import { GetAllCommentsController } from "../app/controllers/commentControllers/getAllCommentsController";

const commentRoutes = Router();

const createComment = new CreateCommentController();
const getAllComments = new GetAllCommentsController();

commentRoutes.post("/create", createComment.handle);
commentRoutes.get("/getAll", getAllComments.handle);

export { commentRoutes };
