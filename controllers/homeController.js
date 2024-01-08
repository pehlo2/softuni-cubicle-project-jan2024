const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager.js')

//routes
router.get('/', (req, res) => {

    let { search, from, to } = req.query
    const cubes = cubeManager.getAllCubes(search, from, to);
    res.render('index', { cubes ,search, from, to })
})
router.get('/about', (req, res) => {

    res.render('about')
})

router.get('/404', (req, res) => {
    res.render('404')
})
module.exports = router 
