const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  currentDay: Number,
  currentMonth: Number,
  decks: Array,
  savedDay: Number,
  savedMonth: Number,
  
  selectedDeck: {
   type: Number,
   default: 0
  },
  studyStarted: {
    type: Boolean,
    default: false
  },

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
    required: false,
  },
  password: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);

/*

currentDay
currentMonth
decks: [ deck ]
savedDay
savedMonth
selectedDeck
studyButtonActive -> move to individual deck
studyStarted
username
password
firstname
lastname

*/
