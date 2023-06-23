export default function WeatherIcon({
    weather,code,className
}){
    return(
        <img className={className}
         src={`http://openweathermap.org/img/wn/${code}.png `} 
         alt={weather}
        />
    )
}