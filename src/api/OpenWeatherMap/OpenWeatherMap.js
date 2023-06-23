import axios from "axios"

const UNITS="metric"
const APP_ID="cb2090ac2337df16d084f36f5d60c73e"
const BASE_URL="https://api.openweathermap.org/data/2.5"

const OpenWeatherMap=axios.create({
    baseURL:BASE_URL,
    params:{
        units:UNITS,
        appid:APP_ID,
    }
})


export default OpenWeatherMap