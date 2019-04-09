const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  helmet = require("helmet");

const app = express();

app.use(express.json(), cors(), morgan("dev"), helmet());

app.get("/", (req, res) => {
  res.send("API is alive!!!");
});

PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`=== App listening on port: ${PORT} ===`));
