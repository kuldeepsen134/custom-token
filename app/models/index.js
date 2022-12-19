const mongoose = require('mongoose')

mongoose.connect(`${process.env.URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("db connection done")
})



const db = {

    User: require('./user'),

}


module.exports = db