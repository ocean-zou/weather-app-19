import BackgroundImage from "../../../BackgroundImage/BackgroundImage";
import bg from './asset/weather-card-img.jpeg'
import Details from './component/Details'
import Temperature from '../../../Temperature'
import CityName from '../../../CityName'
import Weather from '../../../Weather'

export default function CurrentCityWeather({loading,current}){
    return(
        <BackgroundImage image={bg} >
            <div className='flex justify-between text-center pt-16 px-24 gap-16'>
                <div className="">
                    <Temperature 
                        value={(current?.temp)} 
                        className="text-white text-7xl text-center min-w-[300px]" 
                        loading={loading}/>
                    <Weather loading={loading} weather={current?.weather[0].main}/>
                    <Details loading={loading} wind={current?.wind_speed} humidity={current?.humidity}/>
                </div>
                <div className="
                    text-white text-5xl font-medium 
                    after:block after:content-[''] after:h-[3px] after:w-1/2 
                    after:bg-white after:mt-2 after:translate-x-1/2
                    ">
                    <CityName name="Melbourne"/>
                </div>
            </div>
            <div className="bg-black opacity-10 w-full h-4"/> 
        </BackgroundImage>
)}