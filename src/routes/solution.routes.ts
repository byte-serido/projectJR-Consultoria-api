import { Router } from "express";
import { CreateSolutionController } from "../app/controllers/createSolutionController";
import { GetAllSolutionController } from "../app/controllers/getSolutionsController";
import { UpdateSolutionController } from "../app/controllers/updateSolutionController";
import { DeleteSolutionController } from "../app/controllers/deleteSolutionController";
import { GetOneSolutionController } from "../app/controllers/getOneSolutionController";

const createSolutionController = new CreateSolutionController();
const getAllSolutionController = new GetAllSolutionController();
const getOneSolutionController = new GetOneSolutionController();
const updateSolutionController = new UpdateSolutionController();
const deleteSolutionController = new DeleteSolutionController();
const solutionRoutes = Router();

solutionRoutes.post("/create", createSolutionController.handle);
solutionRoutes.get("/getAll", getAllSolutionController.handle);
solutionRoutes.get("/getOne", getOneSolutionController.handle);
solutionRoutes.put("/update", updateSolutionController.handle);
solutionRoutes.delete("/delete", deleteSolutionController.handle);

export { solutionRoutes };