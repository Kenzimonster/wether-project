import React from"react";

export default function WeatherForecastDay(props){
  let icon = props.data.condition.icon_url;
  let iconAlt = props.data.condition.icon;

  function day(){
   let date = new Date(props.data.time * 1000);
   let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   return days[day];
  }
  function maxTemp(){
   let temperature = Math.round(props.data.temperature.maximum);
   return `${temperature}`
  }
  function minTemp(){
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`
  }
  
  return(
    <div className="forecastInner">
      <div className="forecastDay">{day()}</div>
      <img src={icon} alt={iconAlt} className="forecastCondition"/>
      <div className="forecastTemperature">
        <span className="forecastMax">{maxTemp()}°</span>
        {" | "}
        <span className="forecastMin">{minTemp()}°</span>
      </div>
    </div>
  )
}