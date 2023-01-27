import { Router } from "express";
import { CreateContactController } from "../app/controllers/contactControllers/createContactController";

const createContactController = new CreateContactController();
const contactRoutes = Router();

contactRoutes.post("/create", createContactController.handle);

export { contactRoutes };
