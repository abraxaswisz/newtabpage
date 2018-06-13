import React from "react";
import { weatherIcons } from "../weatherIcons";

class WeatherIcon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <svg viewBox="0 0 30 30" width="150px" height="150px">
          <path d={weatherIcons[this.props.weatherDescription]} />
        </svg>
      </React.Fragment>
    );
  }
}

export default WeatherIcon;
