import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar bg-light d-flex flex-column flex-sm-row">
        <span className="navbar-brand mb-0 h1">Hangman (Do) or Die</span>

        <span className="navbar-text blog-nav-item align-self-end">
          Choices left: {this.props.choicesLeft}
        </span>
      </nav>
    );
  }
}

export default Header;
