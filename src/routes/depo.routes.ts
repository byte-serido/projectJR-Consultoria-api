import { Router } from "express";
import { CreateDepoController } from "../app/controllers/depositionsController/createDepoController";
import { GelAllDepoController } from "../app/controllers/depositionsController/getAllDepoController";
import { UpdateDepos } from "../app/controllers/depositionsController/updateDepoController";
import { DeleteDepoController } from "../app/controllers/depositionsController/deleteDepoController";
import { GetOneDepoController } from "../app/controllers/depositionsController/getOneDepoController";

const depoRoutes = Router();

const createDepo = new CreateDepoController();
const getAllDepo = new GelAllDepoController();
const upDepo = new UpdateDepos();
const deleteDepo = new DeleteDepoController();
const getOneDepo = new GetOneDepoController();

depoRoutes.post("/create", createDepo.handle);
depoRoutes.get("/getall", getAllDepo.handle);
depoRoutes.put("/update", upDepo.handle);
depoRoutes.delete("/delete", deleteDepo.handle);
depoRoutes.get("/getone:id", getOneDepo.handle);

export { depoRoutes };
