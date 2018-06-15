import React from "react";
import { icons } from "../icons";

export default function Icon(props) {
  return (
    <React.Fragment>
      <svg
        viewBox="0 0 30 30"
        width={`${props.size}px`}
        height={`${props.size}px`}
      >
        <path d={icons[props.iconName]} />
      </svg>
    </React.Fragment>
  );
}
