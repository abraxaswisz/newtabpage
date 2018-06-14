import React from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import DateComponent from "./DateComponent";

export default function App() {
  return (
    <React.Fragment>
      <DateComponent />
      <div>Hello</div>
      <Weather />
      <SearchBar />
    </React.Fragment>
  );
}
