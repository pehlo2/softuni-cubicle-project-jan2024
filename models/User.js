let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    passsword:String
})


let User = mongoose.model('User',userSchema)

module.exports = User