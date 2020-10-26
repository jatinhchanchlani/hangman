import React, { Component } from "react";
import Image from "./image";
import Header from "./header";
import Letters from "./letters";
import { getRandomCity } from "../model/cities";
import CityLetters from "./cityletters";

const MAX_CHOICES = 6;

class Game extends Component {
  state = {
    maxChoices: MAX_CHOICES,
    choicesLeft: MAX_CHOICES,
    city: getRandomCity(),
    letters: this.getAllLetters(),
  };

  render() {
    return (
      <div className="container-fluid">
        <Header choicesLeft={this.state.choicesLeft} />

        <div className="row d-flex justify-content-center">
          <Image
            choicesLeft={this.state.choicesLeft}
            maxChoices={this.state.maxChoices}
          />
        </div>

        <div className="row d-flex justify-content-center">
          <CityLetters city={this.state.city} />
        </div>

        <div className="row d-flex justify-content-center">
          <Letters
            letters={this.state.letters}
            onClick={(letter) => this.handleLetterClicked(letter)}
          />
        </div>
      </div>
    );
  }

  handleLetterClicked(letter) {
    console.log(letter.canClick);
  }

  getAllLetters() {
    return Array(26)
      .fill()
      .map((_, index) => String.fromCharCode("A".charCodeAt(0) + index))
      .map((char) => ({ value: char, canClick: true }));
  }
}

export default Game;
