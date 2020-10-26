import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light d-flex flex-column flex-sm-row">
        <span className="navbar-brand mb-0 h1">Hangman (Do or Die)</span>
        <span className="lead">
          <span className="badge badge-warning mb-0 h5 navbar-text nav-item">
            Choices left: {this.props.choicesLeft}
          </span>
        </span>
      </nav>
    );
  }
}

export default Header;
