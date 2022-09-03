const request = require('postman-request')
const urlWeatherStack = 'http://api.weatherstack.com/current?access_key=0cdb284a1cb5db2efb8e5dca2726f654&query=-6.3281,-47.4218'
const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVlb2RldiIsImEiOiJjbDdtOGx3eWYxcGx0M3dxdWhoNWFieHpzIn0.v5LwiWbiogqzV2OyxlEaMA&limit=1'
request(urlWeatherStack, (error, response, body) => {
  try {
    const data = JSON.parse(body)
    const weather = data.current
    console.log(`${weather.weather_descriptions[0]}. It is currently ${weather.temperature} degress out. It feels like ${weather.feelslike} degress out`)
  } catch (error) {
    console.log('Unable to connect!')
  }
})
  request(urlMapBox, (error, response, body) => {
    try {
      const data = JSON.parse(body)
      if(!data.features.length) return console.log('Unable to find location!')
      const geolocation = data.features[0]
      const latidude = geolocation.center[1]
      const longitude = geolocation.center[0]
      console.log(`Lat: ${latidude}, Long: ${longitude}`)
    } catch (error) {
      console.error(`Unable to connect!`)
    }
  })

