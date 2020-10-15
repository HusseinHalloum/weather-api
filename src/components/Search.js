import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div class="searchBox">
        {this.state.input}
        <input
          type="text"
          id="location"
          placeholder="Type in a city name"
        />
        <button id="findWeather"
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
