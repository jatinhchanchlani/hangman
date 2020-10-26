import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand" href="#">
          Hangman (Do) or Die
        </div>
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <span class="form-inline my-2 my-lg-0">
            Choices left: {this.props.choicesLeft}
          </span>
        </div> */}
        <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
      </nav>
    );
  }
}

export default Header;