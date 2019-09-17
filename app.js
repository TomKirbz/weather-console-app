const {getWeather} = require("./getWeather.js")
const {getLocation} = require("./getLocation.js")
const colors = require("colors") // colours for the console e.g name is red, age is blue//
const figlet = require("figlet")
const {promisify} = require ("util")

const promisifiedFiglet = promisify(figlet)

const main = async (place) => {
    const location = await getLocation(place);
    const weather = await getWeather(location);
    const temp = Math.floor((weather.temperature - 32) * 5/9)
    const rain = Math.floor(weather.precipProbability)
    const data = await promisifiedFiglet("Weather")
    console.log(data)
    console.log(`The temperature in ${location.name} is ${temp}°C and the probability of rain is ${rain}%`)
    
}


main(process.argv[2]);




