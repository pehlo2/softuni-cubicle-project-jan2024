const { SECRET } = require('../config/config.js');
const jwt = require('../lib/jwt.js');

exports.auth = async (req, res, next) => {
    const token = req.cookies['token']
    if (token) {

        try {
            const user = await jwt.verify(token, SECRET)

            //zapazvam si invom,aciqta v requesta da imam po natatak vyv verigata
            req.user = user
            next()

        } catch (err) {
            res.clearCookie('token')
            res.redirect('/user/login')

        }
        //validate token 

    } else {

        next();

    }


};