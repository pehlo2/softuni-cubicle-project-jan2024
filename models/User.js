let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: { type: String }
})

userSchema.virtual('repeatPassword').set(function (value) {
    console.log(this.password);
    if (value !== this.password) {
        throw new mongoose.MongooseError('Passwords dont Match')
    }

})

let User = mongoose.model('User', userSchema)

module.exports = User