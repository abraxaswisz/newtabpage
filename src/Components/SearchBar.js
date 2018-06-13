import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
