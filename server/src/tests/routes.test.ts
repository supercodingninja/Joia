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

function createTimeoutPromise(milliseconds: number) {
    let ret: Promise<Number> = new Promise(function(resolve, reject) {

        setTimeout(() => {resolve(milliseconds)}, milliseconds);
    });
    return ret;
}

describe("an app test", () => {

    let app: express.Application = configureApp(false);
    let server: http.Server;

    
    beforeEach(() => {
        server = app.listen(3000);
    });

    // frankly, accepting done is dangerous.
    // It BETTER be called when done and not forgotten
    // if it is accepted as a param
    // NEVER accept done as a parameter and neglect to call it
    // In fact, accepting done as a parameter AT ALL is dangerous because
    // if code is changed so that done is no longer called, you'll have
    // a hanging test and a huge mystery on your hands.  This error has
    // killed way too much of my time - don't let it kill yours.
    afterEach(async (done) => {
        server.close(() => {
            // here, it is used because server.close is not async-style
            // it is callback-style (boooo)
            done();
        });        
    });

    beforeAll(async () => {
        // TODO switch to a use mocking for the backend
        // ferrealz database IO is no good for testing
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", { useNewUrlParser: true });
        try {
            await db.User.collection.drop();
        } catch(e) {
            console.log("drop User.collection failed, threw: ", e);
        };
    });

    afterAll(async () => {
        await mongoose.disconnect();        
    });

    it("crufty no-mocks real-test-database route to create a new user", async () => {

        // this is sort of nasty and generally should be avoided when it can be
        // however, database IO can be slow and this test runs the entire gamut
        // all the way through the server routes to the database so the scope
        // is very broad and the IO is heavy.
        // To put it more briefly, this is NOT a *unit* test.
        // It is more of a functional one
        jest.setTimeout(10000);
               
        const res = await request(app)
        .post("/api/users")
        .send({
            name:"ATestAddedMe",
            email:"email3@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"333333"
        });       
        
        expect(res.status).toEqual(200);
        
        let allUsers = await db.User.find({});
        
        expect(allUsers.length).toBe(1);
        
        let justTheOneUser = allUsers[0];

        expect(justTheOneUser.name).toBe("ATestAddedMe");        
    });
});
