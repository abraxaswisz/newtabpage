import React from "react";
import { weatherIcons } from "../weatherIcons";

export default function WeatherIcon(props) {
  return (
    <React.Fragment>
      <svg
        viewBox="0 0 30 30"
        width={`${props.size}px`}
        height={`${props.size}px`}
      >
        <path d={weatherIcons[props.iconName]} />
      </svg>
    </React.Fragment>
  );
}
