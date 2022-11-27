const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

module.exports = app;