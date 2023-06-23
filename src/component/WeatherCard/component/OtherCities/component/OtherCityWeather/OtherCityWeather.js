import CityName from "../../../../../CityName/CityName";
import Temperature from "../../../../../Temperature/Temperature";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";

export default function OtherCityWeather({name,temperature,weather,onClick}){
    return(
    <div 
        className="
            flex items-center text-left relative gap-4
            before:content-[''] before:h-[20px] before:w-[4px] before:absolute hover:before:bg-black/20 before:left-[-8px] hover:cursor-pointer
        "
        onClick={onClick}>
        <div className="grow">
            <CityName name={name}/>
        </div>
        <div className="w-[50px]">
            <Temperature className="text-xl" value={temperature} />
        </div>
        <WeatherIcon code={weather.code} weather={weather.name}/>
    </div>)
}