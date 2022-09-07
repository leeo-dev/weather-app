const request = require("postman-request");
const forecast = ({ latitude, longitude }, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0cdb284a1cb5db2efb8e5dca2726f654&query=${latitude},${longitude}`;
  console.log(latitude, longitude)
  request(url, (error, response, body) => {
    if (error) return callback("Unable to connect to location services!", undefined);
    const data = JSON.parse(body);
    const weather = data.current;
    callback(null, {description: weather.weather_descriptions[0], temperature: weather.temperature, feelsLike: weather.feelslike})
  });
};

module.exports = forecast
