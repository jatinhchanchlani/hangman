import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <div class="navbar-brand">Hangman (Do) or Die</div>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <span class="nav-item">Choices left: {this.props.choices}</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
