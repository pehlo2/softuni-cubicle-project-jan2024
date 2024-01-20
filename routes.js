const routers = require("express").Router()
const homeController = require('./controllers/homeController.js')
const cubeController = require('./controllers/cubeController.js')
const accessoryController = require('./controllers/accessoryController.js')
const userController = require('./controllers/userController.js')

routers.use(homeController)
routers.use('/cubes',cubeController)
routers.use('/accessory',accessoryController)
routers.use('/user',userController)

routers.get('*',(req, res) => {
   res.redirect('/404')

})
module.exports = routers