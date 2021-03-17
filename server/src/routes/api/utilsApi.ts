import express from "express";
import * as utilsController from "../../controllers/utilsController"

const router = express.Router()

router.route("/seed")
.get(utilsController.seed)


export default router;