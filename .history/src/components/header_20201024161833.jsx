import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="blog-nav d-flex flex-column flex-sm-row">
        <span className="navbar-brand mb-0 h1">Hangman (Do) or Die</span>

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
