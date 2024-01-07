const express = require('express')
let app  = express()
const PORT = 5000
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarConfig.js')

expressConfig(app)
handlebarsConfig(app)


//add HandleBars 

//setup ssc and static files
app.use(express.static('static'))

//routes
app.get('/', (req,res)=>{

    res.render('index')
})

app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})