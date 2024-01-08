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

router.get('/404', (req,res)=>{
    res.render('404')
})
module.exports = router 
