import React from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import MoonPhase from "./MoonPhase";
import DateAndTime from "./DateAndTime";
import RandomImage from "./RandomImage";

export default function App() {
  return (
    <React.Fragment>
      <section id="info">
        <MoonPhase />
        <Weather />
      </section>
      <section id="main">
        <RandomImage />
        <DateAndTime />
        <SearchBar />
      </section>
    </React.Fragment>
  );
}
