import path from "path";
import express from "express";
import apiRouter from "./api/index";

const routes = express.Router();

// API Routes
routes.use("/api", apiRouter);

export default routes;