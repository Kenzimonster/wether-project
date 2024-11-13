import React,{ useState } from "react";
import WeatherInfo from "./WeatherInfo";
import logo from "./logo.jpg";
import HeaderDate from "./HeaderDate";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [ city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      iconAlt:response.data.condition.icon,
      temperature: response.data.temperature.current,
      feelLike:response.data.temperature.feels_like,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleChangeCity(event){
    setCity(event.target.value);
  }
  function search(){
    const apiKey = `3at0foeb77eba84a5c21cf21f38b13e9`;
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready){
    return( 
      <div>
        <header>
          <div className="headerLeftCollum">
            <img src={logo} alt="Weather Goblin Icon" className="icon"/>
            <div className="dateTop" ><HeaderDate /></div>
          </div>  
          <div className="headerRghtCollum">
            <h1>Goblin Weather Board</h1>          
            <form onSubmit={handleSubmit}>
              <div className="searchBar">
                <input type="search" placeholder="pick a city" autoFocus="on" className="searcInput" onChange={handleChangeCity}/>
                <input type="submit" value="Search" className="searchButton" />
              </div> 
            </form>
          </div>
        </header>
        <hr/>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  }else{
    search();
    return <h1 >"The Goblins are collecting the weather data"</h1>
  }
}