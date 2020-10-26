import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Image />
        <Letters />
      </div>
    );
  }
}

export default Game;
