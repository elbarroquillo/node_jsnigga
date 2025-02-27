const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Define the public folder for static files
const publicDirectory = path.resolve(__dirname, "public");
console.log("Serving static files from:", publicDirectory);

app.use(express.static(publicDirectory));

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("404: Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});