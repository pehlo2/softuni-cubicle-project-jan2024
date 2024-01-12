let express = require('express')
const accessoryManager = require('../managers/accessoryManager.js')
let router = express.Router()

router.get('/create',(req,res)=>{

 res.render('accessory/create')

})

router.post('/create', async (req, res)=>{
  
    console.log(req.body);
    const { name, description, imageUrl} =req.body
    await accessoryManager.createAccessory({ name, description, imageUrl})
    ///TOODO ADD ACCESORY TO DATAbase
    res.redirect('/')
})

module.exports = router