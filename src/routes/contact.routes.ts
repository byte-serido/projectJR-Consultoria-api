import { Router } from "express";
import { CreateContactController } from "../app/controllers/contactControllers/createContactController";
import { GetAllContactsController } from "../app/controllers/contactControllers/getAllContactsController";

const createContactController = new CreateContactController();
const getAllContactsController = new GetAllContactsController();
const contactRoutes = Router();

contactRoutes.post("/create", createContactController.handle);
contactRoutes.get("/", getAllContactsController.handle);

export { contactRoutes };
