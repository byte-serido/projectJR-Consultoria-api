import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { contactRoutes } from "./contact.routes";
import { projectRoutes } from "./project.routes";
import { solutionRoutes } from "./solution.routes";
import { memberRoutes } from "./member.routes";
import { userRoutes } from "./user.routes";
import { postRoutes } from "./post.routes";
import { commentRoutes } from "./comment.routes";
import { depoRoutes } from "./depo.routes";
import { Request, Response } from "express";

const routes = Router();

routes.get("/",(req:Request, res:Response) => {
        return res.status(200).send({success:"Server ON and Connect!"});
});
routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/projects", projectRoutes);
routes.use("/solution", solutionRoutes);
routes.use("/member", memberRoutes);
routes.use("/contacts", contactRoutes);
routes.use("/post", postRoutes);
routes.use("/comment", commentRoutes);
routes.use("/depositions", depoRoutes);

export { routes };
