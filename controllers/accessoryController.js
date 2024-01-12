let express = require('express')

let router = express.Router()

router.get('/create',(req,res)=>{

 res.render('accessory/create')

})

router.post('/create', async (req, res)=>{
    let body = req.body
    console.log(req.body);

    ///TOODO ADD ACCESORY TO DATAbase
    res.redirect('/')
})

module.exports = router