const mongoose = require("mongoose");
const Card = require("./Card");

// const Card = require("./Card");

const Schema = mongoose.Schema;

const fruitSchema = new Schema({
  fruit: String,
});

const DeckSchema = new Schema({
  subject: {
    type: String,
    required: false,
  },
  store: {
    type: Array,
    required: false,
  },
});

module.exports = Deck = mongoose.model("deck", DeckSchema);

// this.subject = subject;
//     this.store = [];

//     this.box1 = [];
//     this.box2 = [];
//     this.box3 = [];
//     this.box4 = [];
//     this.box5 = [];
//     this.box6 = [];
//     this.box7 = [];
//     this.retiredBox = [];

//     this.quantityOfCardsToAdd = 4;

//     this.currentStudying = new CurrentQueue();

//     this.leitnerDay = 1;

//     this.deckStarted = false;

//     this.studyButtonActive = false;

//     this.savedMonth = 0;

//     this.savedDay = 0;
