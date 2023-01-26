import { Router } from "express";
import { CreateMemberController } from "../app/controllers/createMemberController";
import { GetMembersController } from "../app/controllers/getMemberController";
import { UpdateMemberController } from "../app/controllers/updateMemberController";
import { DeletMemberController } from "../app/controllers/deleteMemberController";

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
