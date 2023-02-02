import { Router } from "express";
import { CreatePostController } from "../app/controllers/postControllers/createPostController";

const postRoutes = Router();

const createPost = new CreatePostController();

postRoutes.post("/create", createPost.handle);


export { postRoutes }