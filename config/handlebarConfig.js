
const handlebars = require('express-handlebars')


function handlebarsConfig(app){

    app.engine('hbs',handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine','hbs')
    
}
module.exports = handlebarsConfig

