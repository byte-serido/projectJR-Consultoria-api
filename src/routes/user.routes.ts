import { Router } from "express";
import { GetUserController } from "../app/controllers/userControllers/getAllUsersController";
import { UpdateUserController } from "../app/controllers/userControllers/updateUserController";
import { DeleteUserController } from "../app/controllers/userControllers/deleteUserController";

const userRoutes = Router();

const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.put("/update",updateUserController.handle);
userRoutes.delete("/delete",deleteUserController.handle);
userRoutes.get("/getall",getUserController.handle);

export {userRoutes};