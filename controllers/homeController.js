const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager.js')

//routes
router.get('/', (req,res)=>{
    const cubes = cubeManager.getAllCubes();

    res.render('index',{cubes})
})
router.get('/about', (req,res)=>{

    res.render('about')
})
module.exports = router 
