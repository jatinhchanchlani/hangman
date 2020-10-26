import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <span className="navbar-brand mb-0 h1">Hangman (Do) or Die</span>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span>Choices left: {this.props.choicesLeft}></span>
          </li>
        </ul>
        <span className="navbar-text nav-item ml-auto"></span>
      </nav>
    );
  }
}

export default Header;
