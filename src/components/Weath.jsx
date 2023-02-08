import React from 'react'

export default function Weath({oWeather,city}) {
    let k = oWeather.temp;
    let C = k - 273.15
  return (
    
    <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {oWeather.descp}
                </div>
                <div className="welement">
                    Sunrise : {new Date(oWeather.sunrise * 1000).toLocaleTimeString('en-IN')}
                </div>
                <div className="welement">
                    Sunset: {new Date(oWeather.sunset * 1000).toLocaleTimeString('en-IN')}
                </div>
                <div className="welement">
                    Temperature : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Humidity :{oWeather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {oWeather.press} mb
                </div>
            </div>
        </div>
  )
}
