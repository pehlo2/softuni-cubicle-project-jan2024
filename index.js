const express = require('express')
let app  = express()
const PORT = 5000

//add HandleBars 
const handlebars = require('express-handlebars')
app.engine('hbs',handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine','hbs')


//setup ssc and static files
app.use(express.static('static'))

//routes
app.get('/', (req,res)=>{

    res.render('index')
})

app.listen(PORT ,()=>{ console.log(`Server is runing port ${PORT}`);})