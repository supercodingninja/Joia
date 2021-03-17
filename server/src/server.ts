import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import routes from "./routes/index";
import mongoose from "mongoose";

let production = process.argv.find(el => el == "--production");

if(production) {
    console.log("We're running in production");
} else {
    console.log("We're NOT running in production");
}

// I may need to do something different for production
let envPath = production ? path.join(__dirname, "..", ".env") : path.join(__dirname, "..", "..", ".env");

dotenv.config({path: envPath});

const app:express.Application = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

let clientstaticpath = production ? path.join(__dirname, "clientbuild") : "";

if(clientstaticpath != "") {
    app.use(express.static(clientstaticpath));
}

let nonReactPublicsPath = path.join(__dirname,"nonReact_publics");

app.use("/nonReact",express.static(nonReactPublicsPath));

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );