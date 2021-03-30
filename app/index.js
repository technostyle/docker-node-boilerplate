const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// const serveStatic = require("serve-static");

const port = process.env.PORT;

console.log({port}, process.env.PORT, process.env.NAME)
app.use(cors());
// app.use("/", serveStatic(path.join(__dirname, 'static')));
app.use("/", (req, res) => {
    res.send(`port: ${process.env.PORT} host: ${process.env.NAME}`)
  })

app.listen(port);
