import  CurrentCityWeather  from "./component/CurrentCityWeather/CurrentCityWeather.js";
import  OtherInformation  from "./component/OtherInformation/index.js";

export default function WeatherCard(){
    return(<div>
        weather card
        <CurrentCityWeather/>
        <OtherInformation/>
    </div>)
}