import WeatherIcon from '../../../../../WeatherIcon'
import Temperature from '../../../../../Temperature'

export default function DayOfWeekWeather({dayOfWeek,weather,temperature}){
    return(
    <div className='text-center'>
        <div>{dayOfWeek}</div>
        <div className="my-4">
            <WeatherIcon code={weather.code} name={weather.name}/>
        </div>
        <Temperature className="text-xl" value={temperature}/>
    </div>)
}