import React, { Component } from "react";
import Image from "./image";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Image />
        </div>
      </div>
    );
  }
}

export default Game;
