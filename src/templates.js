function Layout({ title, content }) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}| ATTRACTION REVIEWS</title>
        </head>
    <body>
        <main>
            <h1>${title}</h1>
            ${content}
        </main>
    </body>
    </html>
    `;
}

function Locations({ data }) {
  // grab the column name
  //const keys = Object.keys(data[0]);
  return /*html*/ `
    <section>
        <div class="container">
        ${data.map(LocationItem).join("")}
        </div>
    </section>
    `;
}

function LocationItem(entry) {
  return /*html*/ `
  
      ${Object.values(entry)
        .map((val) => `<div>${val}</div>`)
        .join("")}
   
  `;
}

function DisplayRecentPosts(posts) {
  return posts;
}

function AddReviewForm(postsByLocation, locationId) {
  return /*html*/ `
    <form method="POST">
      <p>
        <label for="author">Name</label>
        <input name="author" id="author">
      </p>
      <p>
        <label for="message">Message</label>
        <input name="message" id="message">
      </p>
      <p>
      <label for="rating">Rating</label>
      <input name="rating" id="rating">
    </p>
    <input type=hidden id="location_id" name="location_id" value='${locationId}'>
  
      <button>Review</button>
    </form>

    <div>${Locations({ data: postsByLocation })}</div>
    `;
}

module.exports = { Layout, Locations, DisplayRecentPosts, AddReviewForm };
