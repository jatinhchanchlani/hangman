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
      <div className="container-fluid">
        <Header choicesLeft={this.state.choicesLeft} />
        <div className="row">
          <div className="col col-sm-4" />
          <div>
            <Image
              choicesLeft={this.state.choicesLeft}
              maxChoices={this.state.maxChoices}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <h4>{this.state.city}</h4>
        </div>
        <div className="row">
          <div className="col col-sm-5" />
          <Letters />
        </div>
      </div>
    );
  }
}

export default Game;
