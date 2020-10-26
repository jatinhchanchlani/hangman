import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <span className="navbar-brand mb-0 h1">Hangman (Do) or Die</span>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link">Right Link 1</a>
          </li>
        </ul>
        <span className="navbar-text nav-item ml-auto">
          Choices left: {this.props.choicesLeft}
        </span>
      </nav>
    );
  }
}

export default Header;
