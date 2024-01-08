
const { log } = require('console')
const express = require('express')
const cubeManager = require('../managers/cubeManager.js')


let router = express.Router()
//cube go zadavam v index ako reqquesta zapochva s /cube da polzva tozi routes
router.get('/create', (req, res) => {
    console.log(cubeManager.getAllCubes());
    res.render('create');

})
router.post('/create', (req, res) => {

    const { name, description, imageUrl, difficultyLevel } = req.body;

    cubeManager.createCube({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });
    res.redirect('/');

})
router.get('/details/:cubeId', (req, res) => {
    let id = req.params.cubeId
    let cube = cubeManager.getOne(id);

    if (!cube) {
        return res.redirect("/404")
    }

    res.render('details', { cube });

})

module.exports = router