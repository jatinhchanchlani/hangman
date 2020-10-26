import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <span className="navbar-brand">Hangman (Do) or Die</span>

        <div className="collapse navbar-collapse">
          <span className="navbar-text">
            Choices left: {this.props.choicesLeft}
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;