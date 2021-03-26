import * as db from "../models/index"
import express from "express";

export async function findAll(req: express.Request, res: express.Response) {
    try {
        let allArt = await db.Artwork.find({});
        res.json(allArt);
    } catch(err) {
        res.status(422).json(err);
    }
}

export async function create(req: express.Request, res: express.Response) {
    try {
        let newArt = await db.Artwork.create(req.body);

        //These console.log's are spammy in the tests
        //console.log("req.body in createuser: ", req.body);

        //console.log("newUser: ", newUser);
        res.json(newArt);
    } catch(err) {
        res.status(422).json(err);
    }
}

export default {};