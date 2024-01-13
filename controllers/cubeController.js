

const express = require('express')
const cubeManager = require('../managers/cubeManager.js')
const accessoryManager = require('../managers/accessoryManager.js')


let router = express.Router()
//cube go zadavam v index ako reqquesta zapochva s /cube da polzva tozi routes
router.get('/create', (req, res) => {
    console.log(cubeManager.getAllCubes());
    res.render('create');

})
router.post('/create', async (req, res) => {

    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.createCube({
        name,
        description,
        imageUrl,
        difficultyLevel:
            Number(difficultyLevel)
    });
    res.redirect('/');

})
router.get('/details/:cubeId', async (req, res) => {
    let id = req.params.cubeId
    let cube = await cubeManager.getOneWithAccesories(id).lean();

    if (!cube) {
        return res.redirect("/404")
    }

    res.render('details', { cube });

})

router.get('/details/:cubeId/accessory-attach',async (req,res)=>{
    let id = req.params.cubeId
    let cube = await cubeManager.getOne(id).lean();
    let accessories = await  accessoryManager.getAllNotAtached(cube.accessories).lean()
    let hasAccessories = accessories.length >0

    res.render('accessory/attach',{cube ,accessories,hasAccessories})
   
   })
   router.post('/details/:cubeId/accessory-attach',async (req,res)=>{
   const {accessory:accessoryId}= req.body //accesory e name=@accessory@ ot Html
   let cubeId = req.params.cubeId

   await cubeManager.attachAccessory(cubeId,accessoryId)

   res.redirect(`/cubes/details/${cubeId}/accessory-attach`)

   
   })


module.exports = router