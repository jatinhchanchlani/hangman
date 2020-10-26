import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <span className="navbar-brand">Hangman (Do) or Die</span>

        <span className="navbar-text">
          Choices left: {this.props.choicesLeft}
        </span>
      </nav>
    );
  }
}

export default Header;
