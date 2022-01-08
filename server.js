const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const config = require('config');
const bodyParser = require("body-parser");

const users = require("./routes/api/user");
const cards = require("./routes/api/cards");
const deck = require("./routes/api/deck");

const app = express();

app.use(bodyParser.json());

app.use(express.json());

const db = "mongodb://localhost:27017/lifeisagame";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/users", users);
app.use("/api/cards", cards);
app.use("/api/deck", deck)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
