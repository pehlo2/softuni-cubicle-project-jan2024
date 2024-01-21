let mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash
})

let User = mongoose.model('User', userSchema)

module.exports = User