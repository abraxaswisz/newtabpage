import React from "react";

export default function SearchBar() {
  return (
    <React.Fragment>
      <form method="get" action="https://www.google.com/search">
        <input
          type="text"
          autoComplete="off"
          name="q"
          placeholder="Search..."
          id="search-bar"
        />
      </form>
    </React.Fragment>
  );
}
