const server = require("./server.js");

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// DB_FILE=db.sqlite node model/location.js
