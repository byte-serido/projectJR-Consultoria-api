import { Router } from "express";
import { CreatePostController } from "../app/controllers/postControllers/createPostController";
import { GetAllPostController } from "../app/controllers/postControllers/getAllPostController";
import { UpdatePost } from "../app/controllers/postControllers/updatePostController";
import { DeletePost } from "../app/controllers/postControllers/deletePostController";
import { GetOnePostController } from "../app/controllers/postControllers/getOnePostController";

const postRoutes = Router();

const createPost = new CreatePostController();
const getAllPost = new GetAllPostController();
const updatePost = new UpdatePost();
const deletePost = new DeletePost();
const getOnePost = new GetOnePostController();

postRoutes.post("/create", createPost.handle);
postRoutes.get("/getall", getAllPost.handle);
postRoutes.put("/update", updatePost.handle);
postRoutes.delete("/delete", deletePost.handle);
postRoutes.get("/getone:id", getOnePost.handle);

export { postRoutes };
