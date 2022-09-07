const {Router} = require('express')
const {getCurrentWeather} = require('./get-weather')
const router = Router()
router.get('/', (request, response) => {
  response.render('index', {
    title: 'Weather',
    name: 'Leonardo Albuquerque',
    author: 'leeodev'
  })
})

router.get('/weather', async (request, response) => {
  console.log(request.query)
  if(!request.query?.address) return response.json({error: "You must provide and address!"})
  const weather = await getCurrentWeather(request.query?.address)
  return response.json(weather)
})
module.exports = router