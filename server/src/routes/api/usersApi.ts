import express from "express";
import * as userController from "../../controllers/userController"

const router = express.Router()
router.route("/")
.get(userController.findAll)
.post(userController.create)

export default router;