import express from "express";

const api = express();
api.use(express.json());


api.listen(3333, () => console.log("Server is running in port 3333!"));