const mongoose = require('mongoose')

const cubSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,

})

const Cube = mongoose.model('Cube', cubSchema)
module.exports = Cube
