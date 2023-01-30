import { Router } from "express";
import { CreateUserController } from "../app/controllers/userControllers/createUserController";
import { LoginUserController } from "../app/controllers/authControllers/loginUserController";


const createUserController = new CreateUserController();
const loginUserController = new LoginUserController()
const authRoutes = Router();

authRoutes.post("/resgister", createUserController.handle);
authRoutes.post("/login", loginUserController.handle);


export {authRoutes};
