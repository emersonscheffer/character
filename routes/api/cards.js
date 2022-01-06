const express = require('express')
const router = express.Router()

const Card = require('../../models/Card')

router.post('/', (req, res)=> {
    const newCard = new Card({
        title: req.body.title
    })
    newCard.save().then(card => res.json(card))
})

module.exports = router