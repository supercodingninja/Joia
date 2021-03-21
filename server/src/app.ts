import express from "express";
import path from "path";
import routes from "./routes/index";

export default function configureApp(shareExpressStatics: Boolean) : express.Application {

    const app:express.Application = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routes);

    let clientstaticpath = shareExpressStatics ? path.join(__dirname, "clientbuild") : "";

    if(clientstaticpath != "") {
        app.use(express.static(clientstaticpath));
    }

    let nonReactPublicsPath = path.join(__dirname,"nonReact_publics");

    app.use("/nonReact",express.static(nonReactPublicsPath));

    return app;
}