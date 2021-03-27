import express from "express";
import * as artController from "../../controllers/artController"

const router = express.Router()
router.route("/")
.get(artController.findAll)
.post(artController.create)

export default router;