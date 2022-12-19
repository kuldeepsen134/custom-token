const express = require('express')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()

require('./app/routers/user')(app)


app.get('*', (req, res) => {
    res.status(404).send({
        message: 'Hummm Smart!'
    })
})

const port = process.env.PORT || 1997

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
