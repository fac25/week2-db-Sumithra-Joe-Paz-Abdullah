const db = require("../database/db.js");

/////////////////////

// QUERY TO LIST 10 OF THE MOST RECENT MESSAGES

/////////////////////

const most_recent = db.prepare(/*sql*/ ` 
SELECT message 
FROM posts ORDER BY created_at DESC LIMIT 10
`);

function getRecentPosts() {
  return most_recent.all();
}

/////////////////////

// QUERY TO LIST THE 10 POSTS FOR SELECTED LOCATION

/////////////////////

const posts_location = db.prepare(/*sql*/ ` 
   SELECT message, author, rating 
   FROM posts WHERE location_id = ? LIMIT 10
`);

function getLocationPosts(location_id) {
  return posts_location.all(location_id);
}

module.exports = { getRecentPosts, getLocationPosts };
