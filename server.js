const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is alive!!!");
});

PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`=== App listening on port: ${PORT} ===`));
