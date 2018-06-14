import React from "react";

export default function DateComponent() {
  return <React.Fragment>{new Date().toLocaleDateString()}</React.Fragment>;
}
