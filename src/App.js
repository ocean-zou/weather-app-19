import BackgroundImage from './component/BackgroundImage/BackgroundImage';
import WeatherCard from './component/WeatherCard'
import bg from './asset/bg-img.webp'

function App() {
  return (
    <BackgroundImage image={bg} >
      <div className='h-screen flex justify-center items-center'>
        <WeatherCard/>
      </div>
    </BackgroundImage>)
}

export default App;
