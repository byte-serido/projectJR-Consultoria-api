import { Router } from "express";
import { CreateDepoController } from "../app/controllers/depositionsController/createDepoController";
import { GelAllDepoController } from "../app/controllers/depositionsController/getAllDepoController";
import { UpdateDepos } from "../app/controllers/depositionsController/updateDepoController";
import { DeleteDepoController } from "../app/controllers/depositionsController/deleteDepoController";

const depoRoutes = Router();

const createDepo = new CreateDepoController();
const getAllDepo = new GelAllDepoController()
const upDepo = new UpdateDepos();
const deleteDepo = new DeleteDepoController();

depoRoutes.post("/create", createDepo.handle);
depoRoutes.get("/getall", getAllDepo.handle);
depoRoutes.put("/update", upDepo.handle);
depoRoutes.delete("/delete", deleteDepo.handle);


export {depoRoutes}