var router = require('express').Router()

const { User } = require('../controllers')



module.exports = app => {

    router.post('/', User.create)

    router.get('/', User.findAll)



    app.use('/users', router)
}