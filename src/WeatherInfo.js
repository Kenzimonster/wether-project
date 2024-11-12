import React  from "react";

export default function WeatherInfo(props){
  return(
    <div className="currentWeather">
      <div>
       <h2 className="currentCity">{props.data.city}</h2>
        <p className="currentWeatherDescription">
          <span>Sunday 00:00</span>,  <span>{props.data.description}</span><br/>
         Humidity: <span className="currentHumidity">{props.data.humidity}</span>%, Wind: <span className="currentWindspeed">{props.data.wind}</span> km/h
       </p>
      </div>
      <div>
        <div className="currentTemp">
         <div>
           <img src={props.data.icon} alt={props.data.iconAlt} className="currentTempIcon"/>
         </div>
         <div className="currentTempValue">{Math.round(props.data.temperature)}</div>
         <div className="currentTempUnit">°C|°F</div>
       </div>
       <p className="feelsLike">Feel Like:{" "}{Math.round(props.data.feelLike)}°C</p>
      </div> 
    </div>
  );
}