import app, {lateConfigureAppRoutes} from "../app";
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
    let ret: Promise<number> = new Promise(function(resolve, reject) {

        setTimeout(() => {resolve(milliseconds)}, milliseconds);
    });
    return ret;
}

describe("an app test", () => {

    lateConfigureAppRoutes(app, false);
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
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true });        
    });

    beforeEach(async () => {
        try {
            await db.User.collection.drop();
            await db.Artwork.collection.drop();
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

    it("crufty no-mocks real-test-database route to create a new art", async () => {

        jest.setTimeout(10000);

        const userRes = await request(app)
        .post("/api/users")
        .send({
            name:"ATestAddedMe",
            email:"email3@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"333333"
        });

        let allUsers = await db.User.find({});

        let justTheOneUser = allUsers[0];

        // I avoid validating the user response and just assume it worked.
        // It *should* work since it just validated that functionality with the
        // above test.  The reason I did the above, though, was because I need 
        // a valid user id to reference in the new art item i'm adding below
               
        const res = await request(app)
        .post("/api/art")
        .send({
            user: justTheOneUser.id,
            name:"Mona Lisa",
            description: "blah",
            category:"classic",
            size:"oh like yay big",
            price: "probably more than $5",
            location:"Seattle",
            imagePath: "http://whatever-i-dont-care"
        });
        
        expect(res.status).toEqual(200);
        
        let allArts = await db.Artwork.find({});
        
        expect(allArts.length).toBe(1);
        
        let justTheOneArt = allArts[0];

        expect(justTheOneArt.name).toBe("Mona Lisa");
        expect(justTheOneArt.user.toString()).toEqual(justTheOneUser.id);
    });

    it("crufty no-mocks real-test-database route to create 2 arts both by a single user", async () => {

        jest.setTimeout(10000);

        const userRes = await request(app)
        .post("/api/users")
        .send({
            name:"ATestAddedMe2",
            email:"email4@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"password"
        });

        let allUsers = await db.User.find({});

        let justTheOneUser = allUsers[0];

        const artSubmit_res1 = await request(app)
        .post("/api/art")
        .send({
            user: justTheOneUser.id,
            name:"Mona Lisa",
            description: "blah",
            category:"classic",
            size:"oh like yay big",
            price: "probably more than $5",
            location:"Seattle",
            imagePath: "http://whatever-i-dont-care"
        });
        
        expect(artSubmit_res1.status).toEqual(200);

        const artSubmit_res2 = await request(app)
        .post("/api/art")
        .send({
            user: justTheOneUser.id,
            name:"Mona Lisa2",
            description: "blah2",
            category:"classic2",
            size:"oh like yay big2",
            price: "probably more than $5.01",
            location:"Seattle",
            imagePath: "http://whatever-i-dont-care"
        });
        
        expect(artSubmit_res2.status).toEqual(200);

        // this does the obvious direct Mmongoose api which the route better use
        let allArtsbyThatUser = await db.Artwork.find({user: justTheOneUser.id});
        
        expect(allArtsbyThatUser.length).toBe(2);
        
        let Art1 = allArtsbyThatUser[0];
        let Art2 = allArtsbyThatUser[1];

        expect(Art1.name).toBe("Mona Lisa");
        expect(Art2.name).toBe("Mona Lisa2");
        expect(Art1.user.toString()).toEqual(justTheOneUser.id);
        expect(Art2.user.toString()).toEqual(justTheOneUser.id);
    });

    it("crufty no-mocks real-test-database route to get all art by a particular user", async () => {

        jest.setTimeout(10000);

        const lUser = await db.User.create({
            name:"ATestAddedMe2",
            email:"email4@gmail.com",
            phone:"12345",
            location:"Seattle",
            password:"password"
        });

        // create both the 2 arts created by the above user in the database

        const art1 = await db.Artwork.create({
            user: lUser._id,
            name:"Mona Lisa1",
            description: "blah2",
            category:"classic2",
            size:"oh like yay big2",
            price: "probably more than $5.01",
            location:"Seattle",
            imagePath: "http://whatever-i-dont-care"
        });

        const art2 = await db.Artwork.create({
            user: lUser._id,
            name:"Mona Lisa2",
            description: "blah3",
            category:"classic3",
            size:"oh like yay big3",
            price: "probably more than $5.02",
            location:"Seattle",
            imagePath: "http://whatever-i-dont-care"
        });

        
        const artByThatUserResponse = await request(app)
        .get("/api/cruddodge/artbyuser/" + lUser.id)
                
        expect(artByThatUserResponse.status).toEqual(200);

        let routeReturnedArtByUser = artByThatUserResponse.body;

        expect(routeReturnedArtByUser.length).toBe(2);

        let routeReturnedArtByUserSortedByName = routeReturnedArtByUser.sort((art1:any,art2:any) => {
            if(art1.name < art2.name) {
                return -1;
            }
            if(art1.name > art2.name) {
                return 1;
            }
        });
              
        let Art1 = routeReturnedArtByUserSortedByName[0];
        let Art2 = routeReturnedArtByUserSortedByName[1];

        // this test DOES NOT ASSUME that Mongo always pulls matches by order of insertion 
        // HAVING SORTED THESE BY NAME ORDER ensures that
        expect(Art1.name).toBe("Mona Lisa1");
        expect(Art2.name).toBe("Mona Lisa2");
    });
});
