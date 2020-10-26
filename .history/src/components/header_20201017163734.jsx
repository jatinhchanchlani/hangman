import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <span class="form-inline my-2 my-lg-0">
            Choices left: {this.props.choicesLeft}
          </span>
        </div>
      </nav>


      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <div class="navbar-brand" href="#">
          Hangman (Do) or Die
        </div>
        </div>
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">
            Navbar 2
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Right
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
