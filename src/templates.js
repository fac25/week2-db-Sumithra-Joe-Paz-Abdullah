function Layout({ title, content }) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}| ATTRACTION REVIEWS</title>
            <!--link rel="stylesheet" type="text/css" href="style.css"/-->
            <style>${styles}</style>
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
        .map((val) => `<div>${val}</div>`)
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
  <a href="location/${val.id}">
  <div>
  <h3>${val.name}</h3>
  <span>${val.avg_rating}</span>
  </div>
  </a>
  `
    )
    .join("")}

`;
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
    <div class="card" style="border: solid; margin-top:3rem">
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

    <div>${Posts({ data: postsByLocation })}</div>
    `;
}

const styles = /* css */ `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  font-family: monospace, serif;
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
  color: #4d4d4d;
  background-color: #fef5f5;
}

.container {
  width: 75%;
  height: 100vh;
  margin: auto;
  padding-top: 10px;
}
h1,
h2 {
  padding-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  padding: 30px 0;
}

input {
  width: 400px;
  padding: 12px 50px;
  border-radius: 5px;
  justify-content: center;
}

button {
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #4d4d4d;
  color: white;
  border-radius: 5px;
}


;`;

module.exports = {
  Layout,
  Locations,
  DisplayRecentPosts,
  AddReviewForm,
  Posts,
};
