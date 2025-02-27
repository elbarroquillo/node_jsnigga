const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Dynamic route to serve HTML files based on filename
app.get("/:filename", (req, res) => {
  const { filename } = req.params;

  // Only allow page1.html to page5.html
  if (!/^page[1-5]\.html$/.test(filename)) {
    return res.status(404).send("Page not found");
  }

  // Serve the requested HTML file
  res.sendFile(path.join(__dirname, "public", filename));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
