import CityName from "../../../../CityName/CityName";
import Temperature from "../../../../Temperature/Temperature";
import WeatherIcon from "../../../../WeatherIcon/WeatherIcon";

export default function OtherCityWeather({name,temperature,weather}){
    return(
    <div className="flex items-center gap-4">
        <div className="flex-grow">
            <CityName name={name}/>
        </div>
        <div className="w-[50px]">

        <Temperature className="text-xl" value={temperature} />
        </div>
        <WeatherIcon code={weather.code} weather={weather.name}/>
    </div>)
}