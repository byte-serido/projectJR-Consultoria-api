import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { contactRoutes } from "./contact.routes";
import { projectRoutes } from "./project.routes";
const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/projects", projectRoutes);
routes.use("/contacts", contactRoutes);

export { routes };
