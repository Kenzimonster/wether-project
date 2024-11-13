import React  from "react";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props){

  if(props.units === "metric"){
    return(
      <div className="currentWeather">
        <div>
         <h2 className="currentCity">{props.data.city}</h2>
         <p className="currentWeatherDescription">
           <span><FormattedTime date={props.data.date}/></span>,  <span>{props.data.description}</span><br/>
           Humidity: <span className="currentHumidity">{props.data.humidity}</span>%, Wind: <span className="currentWindspeed">{props.data.wind}</span> km/h
         </p>
        </div>
        <div>
          <div className="currentTemp">
           <div>
             <img src={props.data.icon} alt={props.data.iconAlt} className="currentTempIcon"/>
           </div>
           <div className="currentTempValue">{Math.round(props.data.temperature)}</div>
           <div className="currentTempUnit">°C</div>
         </div>
         <p className="feelsLike">Feel Like:{" "}{Math.round(props.data.feelLike)}°C</p>
       </div> 
     </div>
    );
  }else{
    let fahrenheitActual = (props.data.temperature * 9/5) + 32;
    let fahrenheitFeel = (props.data.feelLike * 9/5) + 32;
    return(
    <div className="currentWeather">
     <div>
       <h2 className="currentCity">{props.data.city}</h2>
       <p className="currentWeatherDescription">
          <span><FormattedTime date= {props.data.date}/></span>,  <span>{props.data.description}</span><br/>
         Humidity: <span className="currentHumidity">{props.data.humidity}</span>%, Wind: <span className="currentWindspeed">{props.data.wind}</span> km/h
       </p>
      </div>
      <div>
        <div className="currentTemp">
         <div>
           <img src={props.data.icon} alt={props.data.iconAlt} className="currentTempIcon"/>
          </div>
         <div className="currentTempValue">{Math.round(fahrenheitActual)}</div>
         <div className="currentTempUnit">°F</div>
       </div>
       <p className="feelsLike">Feel Like:{" "}{Math.round(fahrenheitFeel)}°F</p>
     </div> 
    </div>)
  }
}