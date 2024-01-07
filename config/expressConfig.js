const express = require('express')

function expressConfig(app){
    app.use(express.static("static"))
    app.use(express.urlencoded({extended:false}))  ///body parser prai post req na obect req.body ,..
}

module.exports = expressConfig