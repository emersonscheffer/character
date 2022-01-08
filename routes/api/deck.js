const express = require("express");
const router = express.Router();

const Deck = require('../../models/Deck')

router.get("/", (req, res) => {

})

router.post("/", (req, res) => {
    const newDeck = new Deck({
        subject: req.body.subject
    })
    newDeck.save().then((deck) => res.json(deck))
})

module.exports = router