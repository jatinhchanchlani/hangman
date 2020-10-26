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

        <p className="text-center">
          <Hangman
            choicesLeft={this.state.choicesLeft}
            maxChoices={this.state.maxChoices}
          />
        </p>

        <p className="text-center">
          <OutputCharacters
            characters={this.state.outputCharacters}
            gameLost={this.gameLost()}
          />
        </p>

        <p className="text-center">
          <InputCharacters
            characters={this.state.inputCharacters}
            onClick={(character) => this.handleInputCharacterClicked(character)}
            gameWon={this.gameWon()}
            gameLost={this.gameLost()}
          />
          <PlayAgain
            gameWon={this.gameWon()}
            gameLost={this.gameLost()}
            onClick={() => this.handleReset()}
          />
        </p>
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

  gameWon() {
    return this.state.outputCharacters.every((c) => c.guessed === true);
  }

  gameLost() {
    return this.state.choicesLeft === 0;
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
