const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Log the actual path being used
console.log("Serving static files from:", path.join(__dirname, "public"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});