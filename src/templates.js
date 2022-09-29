function Layout({ title, content }) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}| ATTRACTION REVIEWS</title>
            <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
    <body>
        <main class="container">
            <h1>${title}</h1>
            ${content}
        </main>
    </body>
    </html>
    `;
}
function Posts({ data }) {
  // grab the column name
  //const keys = Object.keys(data[0]);
  return /*html*/ ` 
    <section>
        <div class="table_display">
        ${data.map(PostItem).join("")}
        </div>
    </section>`;
}

function PostItem(entry) {
  // console.log(entry);
  return /*html*/ ` 
  
      ${Object.values(entry)
        .map(
          (val) => `<div>${typeof val === "string" ? sanitize(val) : val}</div>`
        )
        .join("")}`;
}
function Locations(title, locations) {
  console.log(title);
  console.log(locations);
  // grab the column name
  //const keys = Object.keys(data[0]);
  // ${data.map(LocationItem).join("")}
  return /*html*/ `

  ${Object.values(locations)
    .map(
      (val) => `
  <div class="attraction-container">
  <a href="location/${val.id}">
  <div>
  <h3>${val.name}</h3>
  <span>${val.avg_rating}</span>
  </div>
  </a>
  </div>
  `
    )
    .join("")}

`;
}

function sanitize(text) {
  console.log(typeof text);
  return text.replaceAll("<", "&lt;");
}

function LocationItem(entry) {
  return /*html*/ `
  
      ${Object.values(entry)
        .map(
          (val) => `
       <a href="#">
          <div>
          ${val}
          </div>
        </a>
        `
        )
        .join("")}
   
  `;
}

function DisplayRecentPosts(posts) {
  return /*html*/ `
  
  ${Object.values(posts)
    .map(
      (val) => `
    <div class="card">
      <div class="card_heading">
        <h3>${val.name}</h3>
        <span>${val.rating}</span>
      </div>
      <div class="card_body">
        <p>${val.message}</p>
        <span>${val.author}</span>
      </div>
    </div>
    `
    )
    .join("")}

`;
}

function AddReviewForm(postsByLocation, locationId) {
  return /*html*/ `
    <form method="POST">
      <p>
        <label for="author">Name</label>
        <input name="author" id="author" placeholder="Joe...">
      </p>
      <p>
      <label for="rating">Rating</label>
      <input type="number" min="1" max="5" name="rating" id="rating" placeholder="3.5">
    </p>
    <p>
        <label for="message">Message</label>
        <input name="message" class="message" id="message" maxlength="300" placeholder="Amazing!..."> 
      </p>
    <input type=hidden id="location_id" name="location_id" value='${locationId}'>
  
      <button>Review</button>
    </form>

    <div>${Posts({ data: postsByLocation })}</div>
    `;
}

module.exports = {
  Layout,
  Locations,
  DisplayRecentPosts,
  AddReviewForm,
  Posts,
};
