const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const db = require("./db.js");

const seedPath = join("src", "database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);
