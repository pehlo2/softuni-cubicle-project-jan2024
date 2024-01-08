const express = require('express')
let app  = express()
const PORT = 5000
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarConfig.js')
const routes = require('./routes.js')


expressConfig(app)
handlebarsConfig(app)
app.use(routes)



app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})