import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

// Port === 6969 if .env PORT is not set
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
