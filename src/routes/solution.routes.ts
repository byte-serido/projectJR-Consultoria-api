import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/createSolutionController";

const createSolutionController = new CreateSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);

export {solutionRoutes};