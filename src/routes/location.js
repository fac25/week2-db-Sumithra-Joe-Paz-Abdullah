const { currentLocation } = require("../model/location"); //SQL queries
const { getLocationPosts } = require("../model/posts"); //SQL queries

const { Layout, AddReviewForm } = require("../templates.js"); //HTML/CSS file

function get(req, res) {
  const locationId = req.params.id;
  const postsByLocation = getLocationPosts(locationId); // returns the posts
  const location = currentLocation(locationId); // returns the name of the location
  let content = AddReviewForm(postsByLocation, locationId);

  const title = location.name;

  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
