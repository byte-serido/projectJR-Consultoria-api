import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/solutionsControllers/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/solutionsControllers/getSolutionsController";
import { UpdateSolutionController } from "../app/controllers/solutionsControllers/updateSolutionController";
import { DeleteSolutionController } from "../app/controllers/solutionsControllers/deleteSolutionController";

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