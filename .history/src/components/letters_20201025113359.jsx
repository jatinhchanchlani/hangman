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
            onClick={() => this.props.onClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
    );
  }
}

export default Letters;
