const {promisify} = require("util")  
const request = require("request")
const promisifiedRequest =  promisify(request)
const apiKey = "adfc6c84f15b2a42759c68277dfb1ef0" 


const getWeather = async (location) => {
    try {
        let data =  await promisifiedRequest({url: `https://api.darksky.net/forecast/${apiKey}/${location.long},${location.lat}`, json: true})
        return(data.body.currently)
    } catch (error) {
        console.log("There's an Error, No dino game though :(")
    }
}

module.exports = {
    getWeather
}







// request({url: `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json: true}, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else {
//         const data = response.body
//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }
// })
