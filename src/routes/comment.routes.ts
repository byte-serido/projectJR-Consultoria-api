import { Router } from "express";
import { CreateCommentController } from "../app/controllers/commentControllers/createCommentController";
import { GetAllCommentsController } from "../app/controllers/commentControllers/getAllCommentsController";
import { UpdateCommentController } from "../app/controllers/commentControllers/updateCommentController";

const commentRoutes = Router();

const createComment = new CreateCommentController();
const getAllComments = new GetAllCommentsController();
const updateComment = new UpdateCommentController();

commentRoutes.post("/create", createComment.handle);
commentRoutes.get("/getAll", getAllComments.handle);
commentRoutes.put("/update", updateComment.handle);

export { commentRoutes };
