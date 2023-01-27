import { Router } from "express";
import { CreateMemberController } from "../app/controllers/memberControllers/createMemberController";
import { GetMembersController } from "../app/controllers/memberControllers/getMemberController";
import { UpdateMemberController } from "../app/controllers/memberControllers/updateMemberController";
import { DeletMemberController } from "../app/controllers/memberControllers/deleteMemberController";

const createMemberController = new CreateMemberController();
const getMembersController = new GetMembersController();
const updateMemberController = new UpdateMemberController();
const deletMemberController = new DeletMemberController();
const memberRoutes = Router();

memberRoutes.post("/create",createMemberController.handle);
memberRoutes.get("/get",getMembersController.handle);
memberRoutes.put("/update",updateMemberController.handle);
memberRoutes.delete("/delet",deletMemberController.handle);

export {memberRoutes};
