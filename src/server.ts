import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";
const history = require('connect-history-api-fallback');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);
app.use(history({
    index: '/index.html'
}));

app.listen(3333, () => console.log("Server is running in port 3333!"));