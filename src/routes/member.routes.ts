import { Router } from "express";
import { CreateMemberController } from "../app/controllers/createMemberController";
import { GetMembersController } from "../app/controllers/getMemberController";
import { UpdateMemberController } from "../app/controllers/updateMemberController";

const createMemberController = new CreateMemberController();
const getMembersController = new GetMembersController();
const updateMemberController = new UpdateMemberController();
const memberRoutes = Router();

memberRoutes.post("/create",createMemberController.handle)
memberRoutes.get("/get",getMembersController.handle)
memberRoutes.put("/update",updateMemberController.handle);

export {memberRoutes};
