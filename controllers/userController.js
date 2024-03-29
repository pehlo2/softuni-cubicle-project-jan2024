const express = require('express')
const router = express.Router()
const userManager = require('../managers/userManager.js');


router.get('/register', (req, res) => {
    res.render('users/register')
})
router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body
    await userManager.register({ username, password, repeatPassword })
    res.redirect('/user/login')

})
router.get('/login', (req, res) => {
    res.render('users/login')

})
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    let token = await userManager.login(username, password)
    res.cookie('token', token ,{httpOnly: true})
    res.redirect('/')
})
module.exports = router

