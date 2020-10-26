import React, { Component } from "react";
import "../css/letters.css";

class Letters extends Component {
  render() {
    const { letters } = this.props;
    return (
      <div className="row">
        {letters.map((letter) => (
          <button
            key={letter.value}
            className="letter-button"
            style={{ backgroundColor: this.getBackground(letter) }}
            onClick={() => this.props.onClick(letter)}
          >
            {letter.value}
          </button>
        ))}
      </div>
    );
  }

  getBackground(letter) {
    if (letter.canClick) {
    } else {
      return "Red";
    }
  }
}

export default Letters;
