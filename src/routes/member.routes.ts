import { Router } from "express";
import { CreateMemberController } from "../app/controllers/memberControllers/createMemberController";
import { GetMembersController } from "../app/controllers/memberControllers/getMemberController";
import { UpdateMemberController } from "../app/controllers/memberControllers/updateMemberController";
import { DeletMemberController } from "../app/controllers/memberControllers/deleteMemberController";
import {GetOneMemberController} from "../app/controllers/memberControllers/getOneMemberController";

const createMemberController = new CreateMemberController();
const getMembersController = new GetMembersController();
const updateMemberController = new UpdateMemberController();
const deletMemberController = new DeletMemberController();
const getOneMemberController = new GetOneMemberController();
const memberRoutes = Router();

memberRoutes.post("/create",createMemberController.handle);
memberRoutes.get("/getall",getMembersController.handle);
memberRoutes.get("/getone:id",getOneMemberController.handle);
memberRoutes.put("/update",updateMemberController.handle);
memberRoutes.delete("/delete",deletMemberController.handle);

export {memberRoutes};
