import express from "express";
import usersRoutes from "./usersApi"
import utilsRoutes from "./utilsApi"
import artRoutes from "./artApi"
import crudDodge from "./crudDodge"

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/art", artRoutes);
router.use("/utils", utilsRoutes);
router.use("/cruddodge", crudDodge);

export default router;