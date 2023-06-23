import OpenWeatherMap from "../OpenWeatherMap"

const MELBOURNE_GEO={lat: -37.8142176, lon: 144.9631608}

export default function oneCall(){
    return( OpenWeatherMap.get("/onecall",{
        params:{
            lat:MELBOURNE_GEO.lat,
            lon:MELBOURNE_GEO.lon,
        }
    })
    .then((response)=>response.data))      
}