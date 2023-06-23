import OpenWeatherMap from "../OpenWeatherMap"

const OTHER_CITIES=[
    {name:"Melbourne",id:2158177},
    {name:"Sydney",id:2147714},
    {name:"Brisbane",id:2174003},
    {name:"Perth",id:2063523},]

export default function group(){
    return(OpenWeatherMap.get("/group",{
        params:{
            id:OTHER_CITIES.map((city)=>city.id).join(",")
        }
    })
    .then((response)=>response.data))        
}