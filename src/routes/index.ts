import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { contactRoutes } from "./contact.routes";
import { projectRoutes } from "./project.routes";
import { solutionRoutes } from "./solution.routes";
import { memberRoutes } from "./member.routes";
const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/projects", projectRoutes);
routes.use("/solutions", solutionRoutes);
routes.use("/member", memberRoutes);
routes.use("/contacts", contactRoutes);

export { routes };
