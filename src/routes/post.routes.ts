import { Router } from "express";
import { CreatePostController } from "../app/controllers/postControllers/createPostController";
import { GetAllPostController } from "../app/controllers/postControllers/getAllPostController";
import { UpdatePost } from "../app/controllers/postControllers/updatePostController";
import { DeletePost } from "../app/controllers/postControllers/deletePostController";

const postRoutes = Router();

const createPost = new CreatePostController();
const getAllPost = new GetAllPostController();
const updatePost = new UpdatePost();
const deletePost = new DeletePost();

postRoutes.post("/create", createPost.handle);
postRoutes.get("/getall", getAllPost.handle);
postRoutes.put("/update", updatePost.handle);
postRoutes.delete("/delete", deletePost.handle);

export { postRoutes }