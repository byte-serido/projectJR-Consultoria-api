import { Router } from "express";
import { CreatePostController } from "../app/controllers/postControllers/createPostController";
import { GetAllPostController } from "../app/controllers/postControllers/getAllPostController";

const postRoutes = Router();

const createPost = new CreatePostController();
const getAllPost = new GetAllPostController();

postRoutes.post("/create", createPost.handle);
postRoutes.get("/getAll", getAllPost.handle)

export { postRoutes }