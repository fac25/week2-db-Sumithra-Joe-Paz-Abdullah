const db = require("../database/db.js");

const select_posts = db.prepare(/*sql */ `
SELECT *
FROM posts
`);

const selectPosts = () => select_posts.all();

//Create a query to list the most recent posts by date.
// [{}] (Perhaps limit 10 to the latest 10 posts)

//  FROM here down PAZ and ABDULLAH

// #5 inserting a new post into databse

const insert_post = db.prepare(/*sql*/ `
INSERT INTO posts 
(author, rating, message) VALUES
($author, $rating, $message)
`);

// #6 Update the avg_rating in locations

const get_ratings = db.prepare(/*sql*/ `
    SELECT rating
    FROM posts
    WHERE location_id = $location_id
`);

function getRatings(locationId) {
  console.log(locationId);
  return get_ratings.all(locationId);
}

console.log(getRatings());

module.exports = { getRatings };
