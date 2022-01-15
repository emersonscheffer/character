const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    deck: {
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true
    }, 
    

})

module.exports = Card = mongoose.model('card', CardSchema)