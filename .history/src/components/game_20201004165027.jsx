import React, { Component } from "react";
import Image from "./image";
import Header from "./header";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Image />
      </div>
    );
  }
}

export default Game;
