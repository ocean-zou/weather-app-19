import { useEffect, useState } from "react";
import SubSection from "../../../SubSection/SubSection";
import  OtherCityWeather  from "./component/OtherCityWeather";
import group from "../../../../api/OpenWeatherMap/api/group";

export default function OtherCities(){
    const[otherCities,setOtherCities]=useState()
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
        group()
        .then((data)=>{
            const list=data.list.map(({name,main,weather})=>({
                name,
                temperature: Number.parseInt(main.temp),
                weather:{
                    code:weather[0].icon,
                    name:weather[0].main
                }
            }))
            setOtherCities(list)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return(
    <SubSection title="Other Cities">
        {loading&&<div>loading...</div>}
        {otherCities?.map(({name,temperature,weather})=>(
            <OtherCityWeather 
                key={name}
                name={name}
                temperature={temperature}
                weather={weather}
            />

        ))}
    </SubSection>)
}