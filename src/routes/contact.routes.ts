import { Router } from "express";
import { CreateContactController } from "../app/controllers/contactControllers/createContactController";
import { GetAllContactsController } from "../app/controllers/contactControllers/getAllContactsController";
import { UpdateContactController } from "../app/controllers/contactControllers/updateContactController";

const createContactController = new CreateContactController();
const getAllContactsController = new GetAllContactsController();
const updateContactController = new UpdateContactController();
const contactRoutes = Router();

contactRoutes.post("/create", createContactController.handle);
contactRoutes.get("/getall", getAllContactsController.handle);
contactRoutes.put("/update/:id", updateContactController.handle);

export { contactRoutes };
