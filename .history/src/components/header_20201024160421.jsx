import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Hangman (Do) or Die</a>
  
  <div className="collapse navbar-collapse" id="navbarText">
   
    <span className="navbar-text">
    Choices left: {this.props.choicesLeft}
    </span>
  </div>
</nav>




      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <div class="navbar-brand"></div>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <span class="nav-item">
                
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
