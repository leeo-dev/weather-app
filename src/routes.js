const {Router, application} = require('express')
const router = Router()
router.get('/', (request, response) => {
  response.render('index', {
    title: 'Weather',
    name: 'Leonardo Albuquerque',
    author: 'leeodev'
  })
})

router.get('/weather', (request, response) => {
  console.log(request.query)
  if(!request.query?.address) return response.json({error: "You must provide and address!"})
  response.json(request.query)
})
module.exports = router