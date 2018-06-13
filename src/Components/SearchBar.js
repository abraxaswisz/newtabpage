import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form method="get" action="https://www.google.com/search">
          <input type="text" name="q" placeholder="Search..." />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
