let User = require('../models/User.js')

function register(userData){
   return User.create(userData)
 
}
module.exports = {register}