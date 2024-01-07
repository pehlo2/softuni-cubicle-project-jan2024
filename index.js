// const env = process.env.NODE_ENV || 'development';

// const config = require('./config/config')[env];
const express = require('express');
let port = 5000
let app = express()

app.get('/',(req,res)=>{

    res.send('helllo petar')
})
// require('./config/express')(app);
// require('./config/routes')(app);

 app.listen(5000, console.log(`Listening on port 5000 ! Now its up to you...`));