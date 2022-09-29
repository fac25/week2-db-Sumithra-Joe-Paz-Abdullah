const express = require("express");
const locations = require("./routes/location-route");
const location = require("./routes/location");
const add = require("./routes/addPost");

const server = express();

server.get("/", locations.get);
server.get("/location/:id", location.get);
server.post("/location/:id", express.urlencoded({ extended: false }), add.post);

// // serve CSS and imgs to every route
const staticHandler = express.static("public");
server.use(staticHandler);

module.exports = server;
