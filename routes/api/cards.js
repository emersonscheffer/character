const express = require("express");
const router = express.Router();

const Card = require("../../models/Card");

router.post("/", (req, res) => {
  const newCard = new Card({
    title: req.body.title,
    deck: req.body.deck,
    level: req.body.level,
  });
  newCard.save().then((card) => res.json(card));
});






////
function addCard(title, deck) {
  Card.findOne({ title: title }).then((cardN) => {
    if (cardN === null) {
      const newCard = new Card({
        title: title,
        deck: deck,
        level: 0,
      });

      newCard.save();
    }
  });
}

 addCard("Get a Move On", "english")

module.exports = router;

