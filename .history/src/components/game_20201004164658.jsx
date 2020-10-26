import React, { Component } from "react";
import Image from "./image";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-5"></div>
          <Image />
        </div>
      </div>
    );
  }
}

export default Game;
