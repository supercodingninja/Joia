import express from "express";
import * as artController from "../../controllers/artController"

const router = express.Router()
router.route("/artbyuser/:userid")
.get(artController.findAllByUser)
// don't allow posts to artbyuser because that's inappropriate
// All art, as posted, requires a user as a field and, as such, all posted art
// *is* associated with a specific user, making any post to a crud route here
// not only bad-style, but redundant too

export default router;