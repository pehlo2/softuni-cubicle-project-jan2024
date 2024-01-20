const express = require('express')
const router = express.Router()
const userManager = require('../managers/userManager.js');

router.get('/register', (req, res) => {
    res.render('users/register')
})
router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body
    console.log( username, password, repeatPassword);
    await userManager.register({username, password, repeatPassword})
    res.redirect('/user/login')

})
module.exports = router
