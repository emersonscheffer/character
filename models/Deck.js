const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    subject: {
        type: String,
        required: true
    }
})

module.exports = Deck = mongoose.model('deck', DeckSchema)