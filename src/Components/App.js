import React, { Fragment, Component } from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <Fragment>
      <div>Hello</div>
      <Weather />
      <SearchBar />
    </Fragment>
  );
}
