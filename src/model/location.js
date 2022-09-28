const db = require("../database/db.js");

/////////////////////

// QUERY TO LIST THE MOST RECENT POSTS

/////////////////////

const select_locations = db.prepare(/*sql*/ ` 
   SELECT name, avg_rating 
   FROM locations
`);

function listLocations() {
  return select_locations.all();
}

module.exports = { listLocations };
