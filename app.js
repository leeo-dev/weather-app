const geocode = require('./utils/geolocation')
const forecast = require('./utils/forecast')

const location = process.argv[2]?.split("=")[1]
geocode(location, (error, data) => {
  if(!location) return console.log("Please, provide location!")
  if(error) return console.log(error)
  console.log(data.location)
  forecast({latitude: data.latitude, longitude: data.longitude}, (error, data) => {
    if(error) return console.log(error)
    console.log(data)
  } )
})
