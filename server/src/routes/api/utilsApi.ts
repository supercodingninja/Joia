import express from "express";
import * as utilsController from "../../controllers/utilsController";
import multer from "multer";
import path from "path";

const fileFilter = (req: express.Request, file: any, cb: any) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const multeropts: multer.Options =
{
    dest: "uploads",
    fileFilter: fileFilter
}

const upload = multer(multeropts);
const type = upload.single("myImage");

const router = express.Router()

router.route("/seed")
    .get(utilsController.seed)

router.route("/imageUpload")
    .post(type, (req: express.Request, res: express.Response) => {
        if (!req.file) {
            console.error("multer decieved me.  It is telling me nothing about the file which is has presumable started downloading");
            res.status(400).end("multer decieved me.  It is telling me nothing about the file which is has presumably started downloading");
        } else {
            
            const baseName = path.basename(req.file.path);

            const uploadPathToUserLocation = "/uploads/";
            const uploadPathToUser = uploadPathToUserLocation + baseName;
            
            res.json({uploadedTo: uploadPathToUser});
        }
    });

export default router;