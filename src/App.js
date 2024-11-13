import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div>
      <section className="messageBoard">
        <Weather  defaultCity="Melbourne"/>
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