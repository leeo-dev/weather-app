const geocode = require('./utils/geolocation')
const forecast = require('./utils/forecast')
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
  forecast({latitude: data.latitude, longitude: data.longitude}, (error, data) => {
    console.log(data)
  } )
})
