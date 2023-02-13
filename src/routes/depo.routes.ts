import { Router } from "express";
import { CreateDepoController } from "../app/controllers/depositionsController/createDepoController";
import { GelAllDepoController } from "../app/controllers/depositionsController/getAllDepoController";
import { UpdateDepos } from "../app/controllers/depositionsController/updateDepoController";

const depoRoutes = Router();

const createDepo = new CreateDepoController();
const getAllDepo = new GelAllDepoController()
const upDepo = new UpdateDepos();

depoRoutes.post("/create", createDepo.handle);
depoRoutes.get("/getAll", getAllDepo.handle);
depoRoutes.put("/update", upDepo.handle);


export {depoRoutes}