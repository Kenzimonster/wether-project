import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div>
      <section className="messageBoard">
        <Weather  defaultCity="Melbourne"/>
        <hr />
        <div class="forecast"> 
          <h4>"forcast being added soon"</h4>
        </div>
        <hr/>
        <footer className="authorLinks">
         <p>
           This App was coded by
           <a href="https://github.com/Kenzimonster" target="_blank" rel="noreferrer">Kenzi👺</a>
           {" "}and is{" "}
           <a href="https://github.com/Kenzimonster/wether-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
           {" "}and{" "} 
           <a href="https://goblin-weather-react-app.netlify.app" target="_blank" rel="noreferrer">hosted on Netlify</a>
          </p>
        </footer> 
      </section>
    </div>
  ) ;
}

export default App;
