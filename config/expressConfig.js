const cookieParser = require('cookie-parser')
const express = require('express')
const { auth } = require('../middlewares/authMiddleware.js')

function expressConfig(app){
    app.use(express.static("static"))
    app.use(express.urlencoded({extended:false}))  ///body parser prai post req na obect req.body ,..
    app.use(cookieParser())
    app.use(auth)
}

module.exports = expressConfig