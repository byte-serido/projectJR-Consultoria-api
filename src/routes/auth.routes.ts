import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController";


const createUserController = new CreateUserController();
const authRoutes = Router();

authRoutes.post("/resgister", createUserController.handle);


export {authRoutes};
