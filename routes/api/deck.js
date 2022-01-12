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

router.put('/:id', (req, res) => {
    Deck.findByIdAndUpdate(req.params.id, {
        //add here pair to update
    },{new: true}, (err, deck) => {
        if(err) return res.status(500).send(err);
        return res.send(deck)
    } )
} )

console.log("from deck here")

module.exports = router