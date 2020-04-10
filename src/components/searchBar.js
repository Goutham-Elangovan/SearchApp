import React, { Component } from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
