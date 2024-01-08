const express = require('express')
let app  = express()
const PORT = 5000
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarConfig.js')
const homeController = require('./controllers/homeController.js')
const cubeController = require('./controllers/cubeController.js')

expressConfig(app)
handlebarsConfig(app)
app.use(homeController)
app.use('/cubes',cubeController)
app.get('*',(req, res) => {
   res.redirect('/404')

})



app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})