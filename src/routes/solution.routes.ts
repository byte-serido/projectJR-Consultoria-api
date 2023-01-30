import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/solutionsController/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/solutionsController/getSolutionsController";
import { UpdateSolutionController } from "../app/controllers/solutionsController/updateSolutionController";
import { DeleteSolutionController } from "../app/controllers/solutionsController/deleteSolutionController";

const createSolutionController = new CreateSolutionController();
const getAllSolutionController = new GetAllSolutionController();
const updateSolutionController = new UpdateSolutionController();
const deleteSolutionController = new DeleteSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);
solutionRoutes.get("/getall", getAllSolutionController.handle);
solutionRoutes.put("/update", updateSolutionController.handle);
solutionRoutes.delete("/delete", deleteSolutionController.handle);

export { solutionRoutes };