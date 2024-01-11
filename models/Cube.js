let mongoose = require('mongoose')

let cubSchema = new mongoose.Schema({
    name: String,
imageUrl: String,
description: String,
difficultyLevel: Number,
  



})

let newCub = mongoose.model('Cub',cubSchema)
module.exports(newCub)