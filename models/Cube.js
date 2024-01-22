const mongoose = require('mongoose')

const cubSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories:[{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory' /// imeto na refenciqta na modela
    }],
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }

})

const Cube = mongoose.model('Cube', cubSchema)
module.exports = Cube
