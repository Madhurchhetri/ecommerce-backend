
const jsonServer = require("json-server");
const express = require("express");
const path = require("path");
const cors = require("cors");

const server = express();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(express.json());
server.use(middlewares);
server.use("/", router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
