const mongoose = require('mongoose')

let accessorySchema = mongoose.Schema({
       name: String,
       ImageUrl:String,
       description: String,
      

})

let Accessory = mongoose.model('accessory',accessorySchema)

module.exports = Accessory;


