import express from "express";
let configViewEngine = (app) => {
    // arrow function
    app.use(express.static("./src/public")); // dung de load cac file static
    app.set("view engine", "ejs"); // dung de su dung ejs
    app.set("views", "./src/views"); // dung de set duong dan views
}

module.exports = configViewEngine; // export module ra ngoai de su dung