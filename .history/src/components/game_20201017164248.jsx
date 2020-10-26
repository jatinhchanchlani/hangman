import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";
import { getRandomCity } from "../model/cities";

const MAX_CHOICES = 6;

class Game extends Component {
  state = { maxChoices: MAX_CHOICES, choicesLeft: MAX_CHOICES };
  render() {
    return (
      <div className="container-fluid">
        <Header choicesLeft={this.state.choicesLeft} />
        <Image
          choicesLeft={this.state.choicesLeft}
          maxChoices={this.state.maxChoices}
        />

        <h4>{getRandomCity()}</h4>
        <Letters />
      </div>
    );
  }
}

export default Game;
