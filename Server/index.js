const pc = require("./controller");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(4000, () => {
  console.log(`server listening on port 4000`);
});
