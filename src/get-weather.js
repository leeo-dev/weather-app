const geocode = require('./utils/geolocation')
const forecast = require('./utils/forecast')

async function getCurrentWeather (location) {
  return new Promise((resolve, reject) => { geocode(location, (error, data) => {
    if(!location) return reject("Please, location must be provided!")
    if(error) return reject(error)
    forecast({latitude: data.latitude, longitude: data.longitude}, (error, data) => {
    if(error) reject(error)
      resolve(data)
    })
  })
})
}
// return Promise.resolve( { description: 'Partly cloudy', temperature: 19, feelsLike: 19 } )

module.exports = {
  getCurrentWeather
}

// module.exports = (location) => {
//   geocode(location, (error, data) => {
//     if(!location) return "Please, provide location!"
//     if(error) return error
//     return forecast({latitude: data.latitude, longitude: data.longitude}, (error, data) => {
//       if(error) return error
//       return data
//     } )
//   })
// }
