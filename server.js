const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const config = require('config');

const users = require("./routes/api/users");

const app = express();

app.use(express.json());

const db = "mongodb://localhost:27017/leitner";

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
