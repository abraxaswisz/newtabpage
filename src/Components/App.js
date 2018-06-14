import React from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <React.Fragment>
      <div>Hello</div>
      <Weather />
      <SearchBar />
    </React.Fragment>
  );
}
