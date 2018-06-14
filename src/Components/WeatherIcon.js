import React from "react";
import { weatherIcons } from "../weatherIcons";

export default function WeatherIcon(props) {
  return (
    <React.Fragment>
      <svg viewBox="0 0 30 30" width="150px" height="150px">
        <path d={weatherIcons[props.weatherDescription]} />
      </svg>
    </React.Fragment>
  );
}
