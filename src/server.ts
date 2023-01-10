import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.listen(3333, () => console.log("Server is running in port 3333!"));