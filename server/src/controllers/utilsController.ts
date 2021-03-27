import * as db from "../models/index"
import express from "express";

export async function seed(req: express.Request, res: express.Response)
{
    try {
        await db.User.deleteMany({});
        let user0 = await db.User.create({
            name:"Name1",
            email:"email1@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"This!!!!"
        });
        await db.User.create({
            name:"Name2",
            email:"email2@gmail.com",
            phone:"56789",
            location:"Seattle",
            password:"secret"
        });
        await db.Artwork.deleteMany({});

        await db.Artwork.create({
            user: user0.id,
            name: "meh",
            description: "blah, blah, blah",
            category: "ugly",
            size: "big",
            price: "$0",
            location: "somewhere probably/maybe",
            imagePath: "https://i.pinimg.com/originals/bd/39/60/bd396005b9e669a47788e6d1d1558ce4.jpg",
            date: Date.now()            

        })
    } catch(err) {
        res.status(422).json(err);
    }
    res.end("done seeding");    
}

export default {};