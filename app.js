const request = require('postman-request')
const geocode = require('./utils/geolocation')
const urlWeatherStack = 'http://api.weatherstack.com/current?access_key=0cdb284a1cb5db2efb8e5dca2726f654&query=-6.3281,-47.4218'
// request(urlWeatherStack, (error, response, body) => {
//   try {
//     const data = JSON.parse(body)
//     const weather = data.current
//     console.log(`${weather.weather_descriptions[0]}. It is currently ${weather.temperature} degress out. It feels like ${weather.feelslike} degress out`)
//   } catch (error) {
//     console.log('Unable to connect!')
//   }
// })

geocode('Tocantinópolis', (error, data) => {
  if(error) return console.log(error)
  console.log('Data: ', data)
})
