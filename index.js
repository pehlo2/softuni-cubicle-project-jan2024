const express = require('express')
let app  = express()
const PORT = 5000
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarConfig.js')
const homeControler = require('./controllers/homeController.js')

expressConfig(app)
handlebarsConfig(app)
app.use(homeControler)



app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})