const request = require('postman-request')

const geocode = (adress, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoibGVlb2RldiIsImEiOiJjbDdtOGx3eWYxcGx0M3dxdWhoNWFieHpzIn0.v5LwiWbiogqzV2OyxlEaMA&limit=1`
  request(url,  (error, response, body) => {
    const data = JSON.parse(body)
    if(error) return callback('Unable to connect to location services!', undefined)
    if(!data.features.length) return callback('Unable to find location. Try another search', undefined)
    const geolocation = data.features[0]
    const latitude = geolocation.center[1]
    const longitude = geolocation.center[0]
    const location = geolocation.place_name
    return callback(null, {latitude, longitude, location})
  })

}

module.exports = geocode