const { listLocations } = require("../model/location");
const { getRecentPosts } = require("../model/posts");
const { Layout, Locations, DisplayRecentPosts } = require("../templates.js");

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
    <div class="locations-container">${Locations(title, locations)}</div>
    <div>${DisplayRecentPosts(posts)}</div>
    
    `;
  }
  // ${Locations({ caption: title, data: locations })}
  const body = Layout({ title, content });
  response.send(body);
}

module.exports = { get };
