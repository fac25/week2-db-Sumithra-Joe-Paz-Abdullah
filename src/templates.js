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
