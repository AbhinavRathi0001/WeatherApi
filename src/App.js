import React from 'react'
import { useState } from 'react'
import "./Weather.css"
import axios from 'axios'
import Weath from './components/Weath'

export const useCord = ()=>{
  const [position,setPosition]= useState()

  window.navigator.geolocation.getCurrentPosition((p)=>{
    setPosition({
      lat:p.coords.latitude,
      long:p.coords.longitude,
    })
  })
  return {
    ...position
  }
}




function App() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const {lat,long} = useCord('')

    

    const apiCall = async (e) => {
      // console.log(lat,long);
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?` + new URLSearchParams({q:loc,lat:lat,lon:long,appid:'c48c848aef7fe611a84c24433fa0d72d'});
        const req = axios.get(url);
        const res = await req;
        // console.log(res)
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            sunrise:res.data.sys.sunrise,
            sunset:res.data.sys.sunset,
        })

        setCity(res.data.name)

    }
    return (<>
        <div className="weathhead">Weather Info</div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" 
                     placeholder="city" 
                     name="loc" />
                    <button className="bttn">Search</button>
                </form>

                <Weath city={city} oWeather={weather} />
            </div>
        </div>
    </>
    )
}

export default App
