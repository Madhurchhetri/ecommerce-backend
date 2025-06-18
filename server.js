const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // ✅ ye important hai

const server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(bodyParser.json()); // ✅ yahi stream error fix karta hai
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`✅ JSON Server is running on port ${port}`);
});
