const express = require("express");
const router = require("./src/routes/api");

//? app configuration
const app = express();


//? database connection

//? handle routes
app.use("/api/v1", router);

//? handle undefined routes
app.use("*", (req, res) => {
    res.status(404).json({success: false, message: "Route was not found"})
})

module.exports = app;