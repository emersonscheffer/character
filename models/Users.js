const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UsersSchema = new Schema({
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Users = mongoose.model("user", UsersSchema);
