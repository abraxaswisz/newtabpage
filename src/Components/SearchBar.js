import React from "react";

export default function SearchBar() {
  return (
    <React.Fragment>
      <form method="get" action="https://www.google.com/search">
        <input type="text" name="q" placeholder="Search..." />
      </form>
    </React.Fragment>
  );
}
