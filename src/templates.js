module.exports = { Layout, Locations, DisplayRecentPosts };

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
