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

        res.json(newArt);
    } catch(err) {
        res.status(422).json(err);
    }
}

export async function findAllByUser(req: express.Request, res: express.Response) {
    try {
        const userId = req.params.userid;
        let allArtByUser = await db.Artwork.find({user: userId});
        
        res.json(allArtByUser);
    } catch(err) {
        res.status(422).json(err);
    }
}

export default {};