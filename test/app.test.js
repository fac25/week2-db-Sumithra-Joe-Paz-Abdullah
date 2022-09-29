// Test #1 Check List Locations: query returns length of rows, name, id
const test = require("node:test");
const assert = require("node:assert");

const server = require("../src/server.js");
const db = require("../src/database/db.js");

const { listLocations } = require("../src/model/location.js");
const { getRecentPosts, insertPost } = require("../src/model/posts.js");
const { response } = require("../src/server.js");

// Delete all tasks and reset ID counter
//DELETE FROM sqlite_sequence WHERE name='posts';
function reset() {
  db.exec(/*sql*/ `
    DELETE FROM posts WHERE author = 'Mary';
  `);
}

test("The function listLocations() returns length of rows, name, id", () => {
  const locations = listLocations();
  assert.equal(
    locations.length,
    8,
    `received ${locations.length} locations, expected 8`
  );
  const location = locations[0];
  assert.equal(location.id, 1);
  assert.equal(location.name, "Warner Bros");
});
// Test #2 List Recent Posts getRecentPosts
test("The function getRecentPosts() returns all recent posts", () => {
  const posts = getRecentPosts();
  const postCard = posts[0];
  assert.equal(posts.length, 5, `received ${posts.length} posts, expected 5`);
  assert.equal(postCard.id, 6);
  assert.equal(postCard.name, "SEA LIFE London");
  assert.equal(postCard.author, "Sumithra");
  assert.equal(postCard.message, "Beautiful!");
  // todo check date is date is a data type of date
});
// Test #3 Form inserts data into Db
test("The form inserts data into Db", async () => {
  const app = server.listen(3338);

  const post_response = await fetch("http://localhost:3338/location/1", {
    method: "POST",
    body: "author=Mary&message=superb&rating=5&location_id=1",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  app.close();
  // assert.equal(post_response.status, 200);
  // assert.equal(post_response.headers.location, "/location/1");

  const body = await post_response.text();
  // console.log("-------------------");
  // console.log(body);
  // console.log("-------------------");

  assert.match(
    body,
    /superb/i,
    `Expected HTML to include "superb", the message, but received:\n${body}`
  );
  assert.match(
    body,
    /5/i,
    `Expected HTML to include "5", the submitted attraction rating, but received:\n${body}`
  );
  reset();
});
