import { Router } from "express";
import { CreateContactController } from "../app/controllers/contactControllers/createContactController";
import { DeleteContactController } from "../app/controllers/contactControllers/deleteContactController";
import { GetAllContactsController } from "../app/controllers/contactControllers/getAllContactsController";
import { UpdateContactController } from "../app/controllers/contactControllers/updateContactController";
import { GetOneContactController } from "../app/controllers/contactControllers/getOneContactController";

const createContactController = new CreateContactController();
const getAllContactsController = new GetAllContactsController();
const updateContactController = new UpdateContactController();
const deleteContactController = new DeleteContactController();
const getOneContactController = new GetOneContactController();
const contactRoutes = Router();

contactRoutes.post("/create", createContactController.handle);
contactRoutes.get("/getall", getAllContactsController.handle);
contactRoutes.put("/update", updateContactController.handle);
contactRoutes.delete("/delete", deleteContactController.handle);
contactRoutes.get("/getone:id", getOneContactController.handle);

export { contactRoutes };
