import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";
const history = require('connect-history-api-fallback');
const cors = require('cors');

const app = express();

app.use(cors({ origin: ['http://localhost:8080'], }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);
app.use(history({
    index: '/index.html'
}));

app.listen(process.env.PORT ? Number(process.env.PORT) : 3000, () => console.log("Server is running in port 3000!"));