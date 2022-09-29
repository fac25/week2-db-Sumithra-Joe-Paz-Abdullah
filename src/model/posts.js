const db = require("../database/db.js");

const select_posts = db.prepare(/*sql */ `
SELECT *
FROM posts
`);

const selectPosts = () => select_posts.all();

// #5 inserting a new post into databse

const insert_post = db.prepare(/*sql*/ `
INSERT INTO posts 
(author, rating, message, location_id) VALUES
($author, $rating, $message, $location_id)
`);

function insertPost(post) {
  return insert_post.run(post);
}

// #6 Update the avg_rating in locations

const get_ratings = db.prepare(/*sql*/ `
    SELECT rating
    FROM posts
    WHERE location_id = $location_id
`);

function getRatings(locationId) {
  return get_ratings.all(locationId);
}

// QUERY TO LIST 10 OF THE MOST RECENT MESSAGES

const most_recent = db.prepare(/*sql*/ ` 
SELECT 
posts.message,  
posts.author, 
posts.rating,
locations.name,
locations.id
FROM posts 
JOIN locations ON posts.location_id = locations.id
ORDER BY created_at DESC LIMIT 10
`);

function getRecentPosts() {
  return most_recent.all();
}

// QUERY TO LIST THE 10 POSTS FOR SELECTED LOCATION

const posts_location = db.prepare(/*sql*/ ` 
   SELECT message, author, rating 
   FROM posts WHERE location_id = ? LIMIT 10
`);

function getLocationPosts(location_id) {
  return posts_location.all(location_id);
}

module.exports = {
  getRecentPosts,
  getLocationPosts,
  getRatings,
  selectPosts,
  insertPost,
};
