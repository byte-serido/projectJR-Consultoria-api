import { Router } from "express";
import { CreatePostController } from "../app/controllers/postControllers/createPostController";
import { GetAllPostController } from "../app/controllers/postControllers/getAllPostController";
import { UpdatePost } from "../app/controllers/postControllers/updatePostController";

const postRoutes = Router();

const createPost = new CreatePostController();
const getAllPost = new GetAllPostController();
const updatePost = new UpdatePost();

postRoutes.post("/create", createPost.handle);
postRoutes.get("/getAll", getAllPost.handle);
postRoutes.put("/update", updatePost.handle);

export { postRoutes }