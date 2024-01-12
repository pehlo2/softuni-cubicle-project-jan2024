const routers = require("express").Router()
const homeController = require('./controllers/homeController.js')
const cubeController = require('./controllers/cubeController.js')
const accessoryController = require('./controllers/accessoryController.js')

routers.use(homeController)
routers.use('/cubes',cubeController)
routers.use('/accessory',accessoryController)
routers.get('*',(req, res) => {
   res.redirect('/404')

})
module.exports = routers