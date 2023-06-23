const axios=require('axios')

const CITIES=["Melbourne","sydney","Brisbane","Perth","Hobart"]
const main =async()=>{
    const fetchGeos=CITIES.map((city)=>axios.get('https://api.openweathermap.org/geo/1.0/direct',{
            params:{
                q:`${city},Australia`,
                limit:1,
                appid:"cb2090ac2337df16d084f36f5d60c73e"
            }
        }).then((response)=>{
            return response.data  })    
    )
    const result=await Promise.all(fetchGeos)  
    result.forEach((item)=>{console.log(item[0].name,item[0].lat,item[0].lon)})
}
main()