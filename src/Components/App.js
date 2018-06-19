import React from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import MoonPhase from "./MoonPhase";
import DateAndTime from "./DateAndTime";

export default function App() {
  return (
    <React.Fragment>
      <section id="info">
        <MoonPhase />
        <Weather />
      </section>
      <DateAndTime />
      <div>Hello</div>
      <SearchBar />
    </React.Fragment>
  );
}
