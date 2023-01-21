"use strict";
const express = require("express"); // npm i express

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("*", (request, response) => {
  response.status(404).send("not found");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
