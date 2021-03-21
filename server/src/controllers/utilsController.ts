import * as db from "../models/index"
import express from "express";

export async function seed(req: express.Request, res: express.Response)
{
    try {
        await db.User.deleteMany({});
        await db.User.create({
            name:"Name1",
            email:"email1@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"secret"
        });
        await db.User.create({
            name:"Name2",
            email:"email2@gmail.com",
            phone:"56789",
            location:"Seattle",
            password:"secret"
        });
    } catch(err) {
        res.status(422).json(err);
    }
    res.end("done seeding");    
}

export default {};