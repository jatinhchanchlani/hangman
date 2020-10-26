import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";
import { getRandomCity } from "../model/cities";

const MAX_CHOICES = 6;

class Game extends Component {
  state = { maxChoices: MAX_CHOICES, choicesLeft: MAX_CHOICES, city: "" };

  componentDidMount() {
    const city = getRandomCity();
    this.setState({ city: city });
  }

  render() {
    return (
      <div className="container-fluid" style={{ background: "black" }}>
        <Header choicesLeft={this.state.choicesLeft} />

        <div className="row d-flex justify-content-center">
          <Image
            choicesLeft={this.state.choicesLeft}
            maxChoices={this.state.maxChoices}
          />
        </div>

        <div className="row d-flex justify-content-center">
          <h4>{this.state.city}</h4>
        </div>

        <div className="row d-flex justify-content-center">
          <Letters />
        </div>
      </div>
    );
  }
}

export default Game;
