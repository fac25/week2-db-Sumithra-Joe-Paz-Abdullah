const { insertPost } = require("../model/posts");

function post(req, res) {
  let { author, message, rating, location_id } = req.body;

  if (!author) author = "anonymous";
  if (!rating) rating = 0;

  insertPost({ author, message, rating, location_id });

  res.redirect(`/location/${location_id}`);
}

module.exports = { post };
