const express = require('express')
const hbs = require('hbs')
const {join} = require('path')

const app = express()
const router = require('./routes')
const PORT = 3000

app.set('view engine', 'hbs')
app.set('views', join(__dirname, '../templates/views'))
hbs.registerPartials(join(__dirname, '../templates/partials'))

app.use(express.static(join(__dirname, '../public')))
app.use(express.json())
app.use(router)

module.exports = {
  PORT, 
  app
}