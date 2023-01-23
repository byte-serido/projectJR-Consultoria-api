import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { projectRoutes } from "./project.routes";
import { solutionRoutes } from "./solution.routes";
const routes = Router();

routes.use("/auth",authRoutes);
routes.use("/projects",projectRoutes);
routes.use("/solutions",solutionRoutes);

export {routes};