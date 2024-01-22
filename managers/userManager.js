let User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt.js')
//const cookieParser = require('cookie-parser')

const {SECRET} = require('../config/config.js')

function register(userData) {
   return User.create(userData)

}
async function login(username, password) {
   ///find if user in dataBase
   const user = await User.findOne({ username })

   if (!user) {
      throw new Error('Cannot find password or username')
   }
   ///validate password if fnd user
   const isValid = bcrypt.compare(password, user.password)

   if (!isValid) {
      throw new Error('Cannot find password or username')
   }


   ///create and Set Token
   let payload = {
      _id: user._id,
      username: user.username
   };

   const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' })

   return token





}
module.exports = { register, login }

