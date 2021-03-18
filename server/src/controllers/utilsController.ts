import * as db from "../models/index"
import express from "express";

export async function seed(req: express.Request, res: express.Response)
{
    try {
        await db.User.deleteMany({});
        await db.User.create({firstName:"firstName1", lastName:"lastName1"})
        await db.User.create({firstName:"firstName2", lastName:"lastName2"})
    } catch(err) {
        res.status(422).json(err);
    }
    res.end("done seeding");    
}

export default {};