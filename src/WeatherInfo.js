import React, {useState }  from "react";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props){
  let [ unit, setUnit] = useState('celsius');

  function showFahreneit(event){
   event.preventDefault();
   setUnit('fahrenheit');
  }
 function showCelsius(event){
   event.preventDefault();
   setUnit('celsius');
  }
  
  if(unit == "celsius"){
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
           <div className="currentTempUnit">°C|<a href="/" onClick={showFahreneit}>°F</a></div>
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
         <div className="currentTempUnit"><a href="/" onClick={showCelsius}>°C</a>|°F</div>
       </div>
       <p className="feelsLike">Feel Like:{" "}{Math.round(fahrenheitFeel)}°F</p>
     </div> 
    </div>)
  }
}