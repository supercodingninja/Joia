import path from "path";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import app, {lateConfigureAppRoutes} from "./app";

// I prefer my imports at the top but the environment needs to be set, in order to get JWT_SECRET from the .env before 
// the passport initialization begins

let production = process.argv.find(el => el == "--production");
let envPath = production ? path.join(__dirname, "..", ".env") : path.join(__dirname, "..", "..", ".env");
dotenv.config({path: envPath});


import passport from "passport";
import authRoutesMiddleWare from "./routes/authentication"
import jwtPassportStrategy from "./config/jwtPassportStrategy";

// this is the server's main entrypoint from the beginning
// It is responsible for setting up the entire app environment
// as it was launched, including mongo setup and calling .listen
// app express instance.  However, the app instance is setup
// for handling its routes seperately in app.ts, so it may be
// tested



if(production) {
    console.log("We're running in production");
} else {
    console.log("We're NOT running in production");
}

lateConfigureAppRoutes(app, !!production);

const port = process.env.PORT || 3001;
// note that this is not configured inside of app hence it is not active for  testing
app.use(passport.initialize());
// Passport config
//passport.use( require("./config/jwtPassportStrategy") );
passport.use(jwtPassportStrategy);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.use( "/api", authRoutesMiddleWare );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );