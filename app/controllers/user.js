const md5 = require('md5')
const mongoose = require('mongoose')

const { User } = require('../models')


exports.create = (req, res) => {

    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        status: 'pending',
        password: md5(req.body.password),
    })

    data.save().then(async (result) => {
        res.send({
            data: result,
            error: false
        })
    }).catch(error => {
        res.send({
            error: error,
            error: true
        })
    })
}


exports.findAll = async (req, res) => {
    const user = User.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send(err)
    })

}