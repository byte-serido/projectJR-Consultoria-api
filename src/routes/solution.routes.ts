import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/getSolutionsController";
import { UpdateSolutionController } from "../app/controllers/updateSolutionController";
import { DeleteSolutionController } from "../app/controllers/deleteSolutionController";

const createSolutionController = new CreateSolutionController();
const getAllSolutionController = new GetAllSolutionController();
const updateSolutionController = new UpdateSolutionController();
const deleteSolutionController = new DeleteSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);
solutionRoutes.get("/getAll", getAllSolutionController.handle);
solutionRoutes.put("/update", updateSolutionController.handle);
solutionRoutes.delete("/delete", deleteSolutionController.handle);

export {solutionRoutes};