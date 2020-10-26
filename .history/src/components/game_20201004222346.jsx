import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";
import { getRandomCity } from "../model/cities";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Image />

        <h4>{getRandomCity()}</h4>
        <Letters />
      </div>
    );
  }
}

export default Game;
