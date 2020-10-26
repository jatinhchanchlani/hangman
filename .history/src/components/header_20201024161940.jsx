import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="blog-nav d-flex flex-column flex-sm-row">
        <span className="navbar-brand mb-0 h1">Hangman (Do) or Die</span>

        <span className="navbar-text blog-nav-item sm-2">
          Choices left: {this.props.choicesLeft}
        </span>
      </nav>
    );
  }
}

export default Header;
