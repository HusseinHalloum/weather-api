
import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/CurrentWeather";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

class App extends Component {
 
  render() {
    return (
     <div className="app">
        <div><Search /></div>
        <div><WeatherItem /></div>
     </div>  
    );
  }
}

export default App;