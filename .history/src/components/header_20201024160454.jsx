import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <span className="navbar-brand">Hangman (Do) or Die</span>

        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text">
            Choices left: {this.props.choicesLeft}
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;
