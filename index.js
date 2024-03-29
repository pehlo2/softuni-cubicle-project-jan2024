const express = require('express')
const dbConnect = require('./config/dB.js')
let app  = express()
const PORT = 5000
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarConfig.js')
const routes = require('./routes.js')


expressConfig(app)
handlebarsConfig(app)
dbConnect().then(()=>console.log("Db connected succssesfully")).catch(err=>console.log('Db error :',err))



app.use(routes)
app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})