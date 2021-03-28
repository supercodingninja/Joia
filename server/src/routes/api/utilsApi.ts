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




const router = express.Router()
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname, "../../../../client/public/assets/img"))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
  const type = upload.single("avatar");


router.route("/seed")
    .get(utilsController.seed)

router.route("/imageUpload")
    .post(type, (req: express.Request, res: express.Response) => {
        // 
         console.log(req.file.originalname)
         res.redirect("/post")
    });

export default router;