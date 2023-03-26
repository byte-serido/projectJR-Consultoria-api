import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";
const history = require('connect-history-api-fallback');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);
app.use(history({
    index: '/index.html'
}));

app.listen(() => console.log("Server is running!"));