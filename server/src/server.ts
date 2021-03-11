import express from "express";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();

const app:express.Application = express();
const port = process.env.PORT || 3001;

let clientstaticpath = "";

if(process.env.NODE_ENV == "production") {
    clientstaticpath = path.join(__dirname, "clientbuild");
}
else {
    console.log(`env.NODE_ENV is ${process.env.NODE_ENV}.  Express won't host the client site.`);
}

console.log(`clientstaticpath is set to '${clientstaticpath}'`)

if(clientstaticpath != "") {
    app.use(express.static(clientstaticpath));
}

app.get("/api/whocares", (req, res) => {
    res.send("something");
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );