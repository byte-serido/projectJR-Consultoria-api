import { Router } from "express";
import { CreateDepoController } from "../app/controllers/depositionsController/createDepoController";
import { GelAllDepoController } from "../app/controllers/depositionsController/getAllDepoController";

const depoRoutes = Router();

const createDepo = new CreateDepoController();
const getAllDepo = new GelAllDepoController()

depoRoutes.post("/create", createDepo.handle);
depoRoutes.get("/getAll", getAllDepo.handle);


export {depoRoutes}