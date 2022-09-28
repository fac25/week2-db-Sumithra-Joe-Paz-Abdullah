const express = require("express");
const locations = require("./routes/location-route");

const server = express();

server.get("/", locations.get);

module.exports = server;
