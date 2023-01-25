import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/getSolutionsController";
import { UpdateSolutionController } from "../app/controllers/updateSolutionController";

const createSolutionController = new CreateSolutionController();
const getAllSolutionController = new GetAllSolutionController();
const updateSolutionController = new UpdateSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);
solutionRoutes.get("/getAll", getAllSolutionController.handle);
solutionRoutes.put("/update", updateSolutionController.handle);

export {solutionRoutes};