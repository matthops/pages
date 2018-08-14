const pc = require("./controller");
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = process.env.port || 4000;
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
