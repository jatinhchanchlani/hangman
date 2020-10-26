import React, { Component } from "react";
import Header from "./header";
import PlayAgain from "./playAgain";
import { getOutputCharacters } from "../model/cities";
import OutputCharacters from "./outputCharacters";
import Hangman from "./image";
import InputCharacters from "./inputCharacters";

const MAX_CHOICES = 6;

class Game extends Component {
  state = {
    maxChoices: MAX_CHOICES,
    choicesLeft: MAX_CHOICES,
    outputCharacters: getOutputCharacters(),
    inputCharacters: this.getAllLetters(),
  };

  render() {
    return (
      <div className="container-fluid">
        <Header choicesLeft={this.state.choicesLeft} />

        <div className="row d-flex justify-content-center">
          <Hangman
            choicesLeft={this.state.choicesLeft}
            maxChoices={this.state.maxChoices}
          />
        </div>

        <div className="row d-flex justify-content-center">
          <OutputCharacters characters={this.state.outputCharacters} />
        </div>

        <div className="row d-flex justify-content-center">
          <InputCharacters
            characters={this.state.inputCharacters}
            onClick={(character) => this.handleInputCharacterClicked(character)}
            gameCompleted={this.gameCompleted()}
          />
          <PlayAgain
            gameCompleted={this.gameCompleted()}
            onClick={() => this.handleReset()}
          />
        </div>
      </div>
    );
  }

  handleInputCharacterClicked(character) {
    if (character.canClick) {
      const { outputCharacters, inputCharacters, choicesLeft } = this.state;
      outputCharacters
        .filter((c) => c.value.toUpperCase() === character.value)
        .map((c) => (c.guessed = true));

      const letterMatch = outputCharacters.some(
        (c) => c.value.toUpperCase() === character.value
      );

      const choices = letterMatch ? choicesLeft : choicesLeft - 1;

      const l = inputCharacters.indexOf(character);
      inputCharacters[l].canClick = false;
      this.setState({
        choicesLeft: choices,
        inputCharacters: inputCharacters,
        outputCharacters: outputCharacters,
      });
    }
  }

  gameCompleted() {
    return this.state.outputCharacters.every((c) => c.guessed === true);
  }

  handleReset() {
    this.setState({
      maxChoices: MAX_CHOICES,
      choicesLeft: MAX_CHOICES,
      outputCharacters: getOutputCharacters(),
      inputCharacters: this.getAllLetters(),
    });
  }

  getAllLetters() {
    return Array(26)
      .fill()
      .map((_, index) => String.fromCharCode("A".charCodeAt(0) + index))
      .map((char) => ({ value: char, canClick: true }));
  }
}

export default Game;
