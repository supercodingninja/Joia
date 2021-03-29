import * as db from "../models/index"
import express from "express";

export async function findAll(req: express.Request, res: express.Response) {
    try {
        let allUsers = await db.User.find({});
        res.json(allUsers);
    } catch(err) {
        res.status(422).json(err);
    }
}

export async function create(req: express.Request, res: express.Response) {
    try {
        let newUser = await db.User.create(req.body);

        //These console.log's are spammy in the tests
        //console.log("req.body in createuser: ", req.body);

        //console.log("newUser: ", newUser);
        res.json(newUser);
    } catch(err) {
        res.status(422).json(err);
    }
}

export async function findById(req: express.Request, res: express.Response) {
    try {
       let id = req.params.id;
        let foundUser = await db.User.findById(id);
        res.json(foundUser)
    } catch(err) {
        res.status(422).json(err);
    }
}

export default {};