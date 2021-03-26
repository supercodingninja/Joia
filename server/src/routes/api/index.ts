import express from "express";
import usersRoutes from "./usersApi"
import utilsRoutes from "./utilsApi"
import artRoutes from "./artApi"

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/art", artRoutes);
router.use("/utils", utilsRoutes);

export default router;