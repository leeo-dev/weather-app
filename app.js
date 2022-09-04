const geocode = require('./utils/geolocation')
const forecast = require('./utils/forecast')

geocode('Tocantinópolis', (error, data) => {
  if(error) return console.log(error)
  console.log('Data: ', data)
  forecast({latitude: data.latitude, longitude: data.longitude}, (error, data) => {
    if(error) return console.log(error)
    console.log(data)
  } )
})
