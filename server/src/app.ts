import express from "express";
import path from "path";
import routes from "./routes/index";


const app:express.Application = express();

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
export default app;

export function lateConfigureAppRoutes(app:express.Application, production: boolean) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routes);

    let clientstaticpath = production ? path.join(__dirname, "clientbuild") : "";

    if(clientstaticpath != "") {
        app.use(express.static(clientstaticpath));
    }

    let nonReactPublicsPath = path.join(__dirname,"nonReact_publics");

    let imageUploads = path.join(__dirname,"..", "uploads");

    app.use("/nonReact",express.static(nonReactPublicsPath));

    app.use("/uploads",express.static(imageUploads, {
        setHeaders: function(res, path) {
            res.type("png");
        }
    }));

    return app;
};


// // Including the useAuthTokenStore. //
// // Import the useAuthTokenStore hook. //
// import { useAuthTokenStore } from "./utils/auth";

// function App() {

//     // Use the hook to reauthenticate stored tokens.
//     useAuthTokenStore();

//     /** Rest of your App component code here */
// };