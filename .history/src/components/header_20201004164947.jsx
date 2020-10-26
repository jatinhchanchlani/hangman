import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col cols-sm-4">Hangman (Do) or Die</div>
        <div className="col col-sm-5"></div>
        <div className="col col-sm-3">Choices left</div>
      </div>
    );
  }
}

export default Header;
