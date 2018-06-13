import React, { Fragment, Component } from "react";
import "../App.css";
import Weather from "./Weather";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Hello</div>
        <Weather />
        <SearchBar />
      </Fragment>
    );
  }
}

export default App;
