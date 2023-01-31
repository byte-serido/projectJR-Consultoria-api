import { Router } from "express";
import { projectController } from "../app/controllers/authControllers/projectController";
const authMiddleware = require('../app/middlewares/auth');
const controller = new projectController();
const projectRoutes = Router();

projectRoutes.use(authMiddleware);

projectRoutes.get('/', controller.handle);



export {projectRoutes};
