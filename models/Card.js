const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        required: false
    }
})

module.exports = Card = mongoose.model('card', CardSchema)