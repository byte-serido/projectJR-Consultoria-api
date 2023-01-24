import { Router } from "express";
import { CreateMemberController } from "../app/controllers/createMemberController";

const createMemberController = new CreateMemberController();
const memberRoutes = Router();

memberRoutes.post("/create",createMemberController.handle)

export {memberRoutes};
