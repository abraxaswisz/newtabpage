import React from "react";

export default function DateComponent() {
  return (
    <React.Fragment>
      <h3 id="date">{new Date().toLocaleDateString()}</h3>
    </React.Fragment>
  );
}
