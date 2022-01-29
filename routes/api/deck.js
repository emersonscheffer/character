const express = require("express");
const router = express.Router();

const Deck = require("../../models/Deck");

const Card = require("../../models/Card");
const res = require("express/lib/response");

router.get("/", (req, res) => {
  Deck.find().then((decks) => res.json(decks));
});

router.post("/", (req, res) => {
  const newDeck = new Deck({
    subject: req.body.subject,
  });
  newDeck.save().then((deck) => res.json(deck));
});

router.put("/:id", (req, res) => {
  Deck.findByIdAndUpdate(
    req.params.id,
    {
      //add here pair to update
    },
    { new: true },
    (err, deck) => {
      if (err) return res.status(500).send(err);
      return res.send(deck);
    }
  );
});

function addDeck(subject) {
  Deck.findOne({ subject: subject }).then((deckf) => {
    if (deckf === null) {
      const deckN = new Deck({ subject: subject });
      deckN.save();
    }
  });
}

addDeck("2nd Grade Math");

function printCards() {
  Card.find().then((cards) => {
    for (const card of cards) {
      console.log(card._id, " ->>");
    }
  });
}

printCards();

const secondGradeMathData = require("../../secondGradeMath.json");
console.log(secondGradeMathData[0]);

let deckToUpdate = "2nd Grade Math";
const theCard = {
  id: 2,
  prompt: "Add Numbers",
  number1: 5,
  number2: 10,
  operation: "addition",
  answer: 15,
};

function addCardsIntoADeck(deck, card) {
  Deck.find({ subject: deck }).then((deckf) => {
    let deckStore = deckf[0].store;
    // console.log(deckf[0].store)
    let alreadyInDeck = false;
    for (let i = 0; i < deckStore.length; i++) {
      if (deckStore[i].id === card.id) {
        alreadyInDeck = true;
      }
    }

    if (!alreadyInDeck) {
      deckStore.push(card);

      Deck.findOneAndUpdate(
        { subject: deck },
        { store: deckStore },
        { new: true },
        (err, deck) => {
          if (err) return res.status(500).send(err);
          // return res.send(deck);
          // console.log(deck)
        }
      );
    }
  });
}
addCardsIntoADeck(deckToUpdate, theCard);
////
module.exports = router;
