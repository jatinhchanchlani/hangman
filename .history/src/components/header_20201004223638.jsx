import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Hangman (Do) or Die</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <span class="form-inline my-2 my-lg-0">
        Choices left: {this.props.choicesLeft}
    </span>
    </div>
</nav>


      <div className="row">
        <div className="col cols-sm-4"></div>
        <div className="col col-sm-5"></div>
        <div className="col col-sm-3">
          
        </div>
      </div>
    );
  }
}

export default Header;
