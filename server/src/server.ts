import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import configureApp from "./app";

// this is the server's main entrypoint from the beginning
// It is responsible for setting up the entire app environment
// as it was launched, including mongo setup and calling .listen
// app express instance.  However, the app instance is setup
// for handling its routes seperately in app.ts, so it may be
// tested

let production = process.argv.find(el => el == "--production");

if(production) {
    console.log("We're running in production");
} else {
    console.log("We're NOT running in production");
}

let envPath = production ? path.join(__dirname, "..", ".env") : path.join(__dirname, "..", "..", ".env");

dotenv.config({path: envPath});

const app:express.Application = configureApp(!!production);
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );