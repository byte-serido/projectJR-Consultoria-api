import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController";
import { LoginUserController } from "../controllers/loginUserController";


const createUserController = new CreateUserController();
const loginUserController = new LoginUserController()
const authRoutes = Router();

authRoutes.post("/resgister", createUserController.handle);
authRoutes.post("/login", loginUserController.handle);


export {authRoutes};
