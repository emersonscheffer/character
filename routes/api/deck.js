const express = require("express");
const router = express.Router();

const Deck = require("../../models/Deck");

const Card = require("../../models/Card");
// const res = require("express/lib/response");

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
//
// function printCards() {
//   Card.find().then((cards) => {
//     for (const card of cards) {
//       console.log(card._id, " ->>");
//     }
//   });
// }

// printCards();

const secondGradeMathData = require("../../secondGradeMath.json");
// console.log(secondGradeMathData[0].data);

let deckToUpdate = "2nd Grade Math";


function addCardsIntoADeck(deck, source) {
  Deck.find({ subject: deck }).then((deckf) => {
    let deckStore = deckf[0].store;

    let num = deckStore.length;

    for (let i = num; i < source.length; i++) {
      deckStore.push(source[i]);
    }

    Deck.findOneAndUpdate(
      { subject: deck },
      { store: deckStore },
      { new: true },
      (err, deck) => {
        if (err) return res.status(500).send(err);
      }
    );
  });
}
addCardsIntoADeck(deckToUpdate, secondGradeMathData[0].data);
//////
module.exports = router;
