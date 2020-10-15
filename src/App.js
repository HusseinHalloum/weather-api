
import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
 
  render() {
    return (
      <body id="body">
      <div class="app">
         <div class="app__header">
           <input type="text" id="location" placeholder="Type in a city name"/>
           <input type="button" id="findWeather"value="FIND WEATHER"/>
         </div>
         <div class="app__main">
          <div class="first__main">
            <img src="https://placekitten.com/g/150/150" alt="nice cat"/>
            <p>overcast clouds</p>
            <p class="temperature"><b>Temperature</b> <span class="degree">10</span> to <span class="degree">11</span>C</p>
            <p class="humandpre"><strong>Humidity</strong> 78% <b>Pressure</b> 1008.48</p>
          </div>
          <div class="second__main">
            <div class="smallImage">
              <p>03:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten"/>
              <p><span class="degree">8</span>C</p>
            </div>
            <div class="smallImage">
              <p>06:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten"/>
              <p><span class="degree">9</span>C</p>
            </div>
            <div class="smallImage">
              <p>09:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten"/>
              <p><span class="degree">14</span>C</p>
            </div>
            <div class="smallImage">
              <p>12:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten "/>
              <p><span class="degree">17</span>C</p>
            </div>
            <div class="smallImage">
              <p>15:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten"/>
              <p><span class="degree">18</span>C</p>
            </div>
            <div class="smallImage">
              <p>18:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small kitten"/>
              <p><span class="degree">16</span>C</p>
            </div>
            <div class="smallImage lastImage">
              <p>21:00</p>
              <img src="https://placekitten.com/g/100/80" alt="small Kitten"/>
              <p><span class="degree">13</span>C</p>
            </div>
            </div>
         </div>
      </div>
      </body>
    );
  }
}

export default App;