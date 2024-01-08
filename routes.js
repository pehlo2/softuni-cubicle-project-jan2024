const routers = require("express").Router()
const homeController = require('./controllers/homeController.js')
const cubeController = require('./controllers/cubeController.js')

routers.use(homeController)
routers.use('/cubes',cubeController)
routers.get('*',(req, res) => {
   res.redirect('/404')

})
module.exports = routers