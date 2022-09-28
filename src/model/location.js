const db = require("../database/db.js");

// QUERY TO LIST THE MOST RECENT POSTS

const select_locations = db.prepare(/*sql*/ ` 
   SELECT name, avg_rating 
   FROM locations
`);

function listLocations() {
  return select_locations.all();
}

// #7

const current_location = db.prepare(
  /*sql */
  `SELECT name, avg_rating
 FROM locations
 WHERE id = $id`
);

function currentLocation(id) {
  return current_location.get(id);
}

module.exports = { listLocations, currentLocation };
