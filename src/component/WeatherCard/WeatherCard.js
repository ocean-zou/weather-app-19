import  CurrentCityWeather  from "./component/CurrentCityWeather/CurrentCityWeather.js";
import  OtherCities  from "./component/OtherCities";
import  Forecast  from "./component/Forecast";
import { useEffect, useState } from "react";
import oneCall from "../../api/OpenWeatherMap/api/oneCall.js";

const WEEK_DAYS=['SUN','MON','TUE','WED','THU','FRI','SAT']
export default function WeatherCard(){

    const [loading,setLoading]=useState(true)
    const [current,setCurrent]=useState()
    const [forecast,setForecast]=useState()
    const [city, setCity]=useState({name:"Melbourne",lat: -37.8142176, lon: 144.9631608})
     useEffect(()=>{
        setLoading(true)
        oneCall({lat:city.lat,lon:city.lon})
        .then((data)=>{
            setCurrent(data.current)
            const daily=data.daily.slice(1,6).map((day)=>({
                name:WEEK_DAYS[new Date(day.dt*1000).getDay()],
                weather:{
                    code:day.weather[0].icon,
                    name:day.weather[0].main,
                },
                temperature: Number.parseInt(day.temp.day)
            })
            )
            setForecast(daily)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[city])
    return(
    <div className="rounded-3xl shadow-2xl shadow-black/50 bg-white overflow-hidden">
        <h1>github action</h1>
        <CurrentCityWeather current={current} loading={loading} name={city.name}/>
        <div className="flex gap-12 px-12 py-9">
            <OtherCities onCityClick={(newCity)=>setCity(newCity)}/>
            <div className="w-0.5 bg-black/10"/>
            <div className="flex-1">
                <Forecast loading={loading} forecast={forecast}/>
            </div>
        </div>
    </div>)
}
