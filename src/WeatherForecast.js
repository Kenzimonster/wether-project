import React, {useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]); 
  useEffect(() => {
    setLoaded(false);
 },[props.units]);
 
  function handleResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

 if (loaded){
  let max = Math.round(forecast[0].temperature.maximum);
  let min = Math.round(forecast[0].temperature.minimum);
    return(
     <div>
        <div><h4 className="todayMaxMin"><em>MAX:</em> {max}° | <em>MIN:</em> <span className="minimum">{min}</span>°</h4></div>
        <hr />
        <div className="forecast"> 
          {forecast.map(function(dailyForecast, index){
            if (index  > 0){
              return( <div key={index}><WeatherForecastDay data={dailyForecast}/></div>)
            } else {
              return null;
            }
         })}
        </div>
      </div>
    )
  } else {
    let apiKey ="3at0foeb77eba84a5c21cf21f38b13e9";
    let longitude = props.coordinates.longitude;
    let  latitude = props.coordinates.latitude;
    let unit = props.units;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return <h4 className="todayMaxMin"> "The Goblins are retrieving the forecast"</h4>;
  }
}