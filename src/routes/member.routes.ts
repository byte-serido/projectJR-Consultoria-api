import { Router } from "express";
import { CreateMemberController } from "../app/controllers/createMemberController";
import { GetMembersController } from "../app/controllers/getMemberController";

const createMemberController = new CreateMemberController();
const getMembersController = new GetMembersController();
const memberRoutes = Router();

memberRoutes.post("/create",createMemberController.handle)
memberRoutes.get("/get",getMembersController.handle)

export {memberRoutes};
