// requirements
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const configDB = require('./config/db.js')
// port and the app itself
const port = process.env.PORT || 8000
const app = express()
// using stuff
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

mongoose.connect(configDB.url)

app.set('view engine', 'ejs')

require('./app/routes.js')(app)

app.listen(port, () => {
  console.log('Connecting to Port ' + port + '...')
})
