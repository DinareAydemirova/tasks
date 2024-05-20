
const express = require("express");
require("./src/config/db");
const bodyParser = require("body-parser");
const router = require("./src/routes/productRoute");

const app = express();
const port = 3100;

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
