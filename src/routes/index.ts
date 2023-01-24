import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { projectRoutes } from "./project.routes";
import { memberRoutes } from "./member.routes";
const routes = Router();

routes.use("/auth",authRoutes);
routes.use("/projects",projectRoutes);
routes.use("/memberRoutes",memberRoutes)

export {routes};
