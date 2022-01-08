const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  decks: {
    type: [String],
    required: false
  },
  selectedDeck: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
