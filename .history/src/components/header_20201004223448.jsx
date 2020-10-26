import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
</nav>


      <div className="row">
        <div className="col cols-sm-4">Hangman (Do) or Die</div>
        <div className="col col-sm-5"></div>
        <div className="col col-sm-3">
          Choices left: {this.props.choicesLeft}
        </div>
      </div>
    );
  }
}

export default Header;
