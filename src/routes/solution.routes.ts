import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/getSolutionsController";

const createSolutionController = new CreateSolutionController();
const getAllSolutionController = new GetAllSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);
solutionRoutes.get("/getAll", getAllSolutionController.handle);

export {solutionRoutes};