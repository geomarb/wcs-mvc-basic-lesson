const express = require("express");
const routes = require("./routes");

const app = express();

// it adds the body in the requests (req)
app.use(express.json());

app.use("/api", routes);

module.exports = app;
