const mongoose = require('mongoose')

let accessorySchema = mongoose.Schema({
       name: String,
       ImageUrl:String,
       description: String,
       cubes:ObjectId

})

let Accessory = mongoose.model('accessory',accessorySchema)

module.exports = Accessory


