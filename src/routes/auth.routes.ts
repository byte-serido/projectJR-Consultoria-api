import { Router } from "express";
import { CreateUserController } from "../app/controllers/userControllers/createUserController";
import { LoginUserController } from "../app/controllers/authControllers/loginUserController";
import forgotPassword from "../app/controllers/authControllers/forgotPasswordController";
import resetPassword from "../app/controllers/authControllers/resetPasswordController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
//const forgotPassword = forgotPassword;
const authRoutes = Router();

authRoutes.post("/register", createUserController.handle);
authRoutes.post("/login", loginUserController.handle);
authRoutes.post("/forgot_password", forgotPassword);
authRoutes.post("/reset_password", resetPassword);

export { authRoutes };
