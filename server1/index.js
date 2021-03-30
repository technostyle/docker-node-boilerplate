const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const serveStatic = require("serve-static");

const port = process.env.PORT || 3000;

console.log({port}, process.env.PORT)
app.use(cors());
app.use("/", serveStatic(path.join(__dirname, 'static')));


app.listen(port);
