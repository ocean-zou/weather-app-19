import Meta from './component/Meta'
import Temperature from '../../../../../Temperature'
import CityName from '../../../../../CityName'

export default function CurrentWeather(){
    return(<div>
        <Temperature/>
                weatherCondition
                <Meta/>
                <CityName/>
    </div>)
}