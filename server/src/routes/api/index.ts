import express from "express";
import usersRoutes from "./usersApi"
import utilsRoutes from "./utilsApi"

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/utils", utilsRoutes);

export default router;