import configureApp from "../app";
import express from "express";
import request from "supertest";
import http from "http";
import mongoose from "mongoose";
import * as db from "../models/index"

describe("a test", () => {
    it("just passes", () => {
        expect(5).toBe(5);
    });
});

let app: express.Application = configureApp(false);
let server: http.Server;

function createTimeoutPromise(milliseconds: number) {
    let ret: Promise<Number> = new Promise(function(resolve, reject) {

        setTimeout(() => {resolve(milliseconds)}, milliseconds);
    });
    return ret;
}

describe("an app test", () => {

    beforeEach(() => {
        server = app.listen(3000, () => console.log("listening on port 3000"))
    });

    afterEach(async () => {
        server.close();
        await createTimeoutPromise(500);
    });

    beforeAll(async () => {
        // TODO switch to a test database
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", { useNewUrlParser: true });
        try {
            await db.User.collection.drop();
        } catch(e) {
            console.log("drop failed, threw: ", e);
        };
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    it("crufty no-mocks real-test-database route to create a new user", async (done) => {
        const whocares = await request(app).get('/')

        const res = await request(app)
        .post("/api/users")
        .send({
            name:"Name3",
            email:"email3@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"333333"
        })
        
        expect(res.status).toEqual(200);
        
        // of course the following is a hack.
        // I need to turn it into a promise
        // then expect() to verify it.
        // As it stands, I am not verifying my data -
        // only that the server returned a 200 status code
        db.User.count((err, count) => {
            console.log("count cb got count = ", count)
            expect(count).toBe(1);
            done();  
            // mongoose does not deal in promises and I *should*
            // somehow promisify this.
            // it isn't as easy as using the promisify package because
            // TypeScript hates it for not doing the @types thing.
            // I suggest no one follows my lead in doing this until I figure
            // out a way to avoid running expect inside the callback.
        });     
    });
});