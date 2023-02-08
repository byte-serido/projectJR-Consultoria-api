import { Router } from "express";
import { CreateCommentController } from "../app/controllers/commentControllers/createCommentController";

const commentRoutes = Router();

const createComment = new CreateCommentController();

commentRoutes.post("/create", createComment.handle);

export { commentRoutes };
