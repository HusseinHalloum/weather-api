import React from "react";
import { render } from "react-dom";
import "./currentWeather.css";
import storm from "../img/weather-icons/storm.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

class CurrentWeather extends React.Component {
  render() {
    return (
      <div class="app__main">
        <div class="first__main">
          <img src={mostlycloudy} alt="mostlycloudly icon" />
          <p>overcast clouds</p>
          <p class="temperature"><b>Temperature</b> <span class="degree">10</span> to <span class="degree">11</span>C</p>
          <p class="humandpre"><strong>Humidity</strong> 78% <b>Pressure</b> 1008.48</p>
        </div>
        <div class="second__main">
          <div class="smallImage">
            <p>03:00</p>
            <img src={mostlycloudy} alt="mostlycloudly icon" />
            <p><span class="degree">8</span>C</p>
          </div>
          <div class="smallImage">
            <p>06:00</p>
            <img src={mostlycloudy} alt="mostlycloudly icon" />
            <p><span class="degree">9</span>C</p>
          </div>
          <div class="smallImage">
            <p>09:00</p>
            <img src={clear} alt="clear icon" />
            <p><span class="degree">14</span>C</p>
          </div>
          <div class="smallImage">
            <p>12:00</p>
            <img src={clear} alt="clear icon" />
            <p><span class="degree">17</span>C</p>
          </div>
          <div class="smallImage">
            <p>15:00</p>
            <img src={clear} alt="clear icon" />
            <p><span class="degree">18</span>C</p>
          </div>
          <div class="smallImage">
            <p>18:00</p>
            <img src={clear} alt="clear icon" />
            <p><span class="degree">16</span>C</p>
          </div>
          <div class="smallImage lastImage">
            <p>21:00</p>
            <img src={mostlycloudy} alt="mostlycloudly icon" />
            <p><span class="degree">13</span>C</p>
          </div>
          </div>
       </div>
    );
    
  }
}

export default CurrentWeather;
