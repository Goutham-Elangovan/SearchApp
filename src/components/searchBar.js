import React, { Component } from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //  controlled Event handler
  //   onInputChange = (event) => {
  //     console.log(event.target.value);
  //   };
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            {/* Controlled event handler
            Even though onInputChange is a callback function, it should not have a "()" on line number 14! 
            If it has, every time the component re-renders, onInputChange will be called for no reason!*/}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
