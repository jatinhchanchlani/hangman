import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Hangman (Do) or Die</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
</nav>


      <div className="row">
        <div className="col cols-sm-4"></div>
        <div className="col col-sm-5"></div>
        <div className="col col-sm-3">
          Choices left: {this.props.choicesLeft}
        </div>
      </div>
    );
  }
}

export default Header;
