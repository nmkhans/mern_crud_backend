const express = require("express");
const path = require("path");
require("dotenv").config();
const router = require("./src/routes/api");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");


//? app configuration
const app = express();
app.use(cors());
app.use(bodyparser.json());

//? database connection
const uri = process.env.DATABASE_URI;
const databaseConfig = {
    user: process.env.DATABASE_USER, 
    pass: process.env.DATABASE_PASSWORD
}    

mongoose.connect(uri, databaseConfig)
    .then(() => console.log("database connected"))
    .catch((error) => console.log(error))

//? handle routes
app.use("/api/v1", router);
app.use("/public", express.static(path.join(__dirname, "/public")));

//? handle undefined routes
app.use("*", (req, res) => {
    res.status(404).json({ success: false, message: "Route was not found" })
})

module.exports = app;