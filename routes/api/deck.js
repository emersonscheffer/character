const express = require("express");
const router = express.Router();

const Deck = require("../../models/Deck");

router.get("/", (req, res) => {
    Deck.find()
    .then((decks) => res.json(decks))
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

addDeck("math");

module.exports = router;
