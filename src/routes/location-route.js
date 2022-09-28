const { listLocations } = require("../model/location");
const { getRecentPosts } = require("../model/posts");
const { Layout, Location, DisplayRecentPosts } = require("../templates.js");

function get(request, response) {
  const locations = listLocations();
  const posts = getRecentPosts();

  let title = "";
  let content = "";

  if (!locations.length) {
    response.status(404);
    title = "No locations found";
    content = "<h1>No locations found</h1>";
  } else {
    title = "London Attractions";
    content = /*html */ `
    <div>${Location({ caption: title, data: locations })}</div>
    <div>${DisplayRecentPosts(posts)}</div>
    
    `;
  }

  const body = Layout({ title, content });
  response.send(body);
}

module.exports = { get };
