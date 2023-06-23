App
    WeatherCard
        CurrentCityWeather
            CurrentWeather
                Temperature
                weatherCondition
                Meta
                    Humidity
                    Wind
                CityName
        OtherCities
            title
            OtherCityWeather
                CityName
                Temperature
                WeatherIcon
        CurrentCityForecast
            title
            DayOfWeekWeather
                dayOfWeek
                WeatherIcon
                Temperature

const CITIES=[
    {name:'Melbourne',lat: -37.8142176, lon: 144.9631608},
    {name:'Sydney',lat: -33.8698439, lon: 151.2082848},
    {name:'Brisbane',lat: -27.4689682, lon: 153.0234991},
    {name:'Perth',lat: -31.9558964, lon: 115.8605801},
    {name:'Hobart',lat: -42.8825088, lon: 147.3281233}
]