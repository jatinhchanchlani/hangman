import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";
import { getRandomCity } from "../model/cities";

const MAX_CHOICES = 6;

class Game extends Component {
  state = { choicesLeft: MAX_CHOICES };
  render() {
    return (
      <div className="container-fluid">
        <Header choicesLeft />
        <Image />

        <h4>{getRandomCity()}</h4>
        <Letters />
      </div>
    );
  }
}

export default Game;
