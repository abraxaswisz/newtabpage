import React from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import DateComponent from "./DateComponent";
import Time from "./Time";
import MoonPhase from "./MoonPhase";

export default function App() {
  return (
    <React.Fragment>
      <section id="info">
        <MoonPhase />
        <Weather />
      </section>
      <Time />
      <DateComponent />
      <div>Hello</div>
      <SearchBar />
    </React.Fragment>
  );
}
