import SubSection from '../../../SubSection/SubSection'
import DayOfWeekWeather from './component/DayOfWeekWeather'

export default function Forecast({forecast,loading}){
    return(
    <SubSection title='Forecast'>
        {loading?<div>loading</div>:
        <div className='flex gap-4 justify-between'>
            {forecast?.map(({name,weather,temperature})=>{
                return(<DayOfWeekWeather 
                    key={name}
                    dayOfWeek={name}
                    weather={weather} 
                    temperature={temperature}
                />)
            })}
        </div>}
        
    </SubSection>)
}