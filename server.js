const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // ✅ zaroori hai

const server = express();
const router = jsonServer.router("db.json"); // db.json ka path sahi hai
const middlewares = jsonServer.defaults();

// ✅ Middleware order bahut important hai
server.use(cors());
server.use(bodyParser.json()); // ✅ yeh line stream readable banati hai
server.use(middlewares);
server.use("/users", router); // ✅ POST /users ke liye sahi route
server.use("/orders", router);
server.use("/products", router);

// ✅ Port setup
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`✅ JSON Server is running on port ${port}`);
});
