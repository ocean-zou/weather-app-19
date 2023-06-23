import OpenWeatherMap from "../OpenWeatherMapAPI"

export default function oneCall({lat,lon}){
    return( OpenWeatherMap.get("/onecall",{
        params:{
            lat,
            lon,
        }
    })
    .then((response)=>response.data))      
}