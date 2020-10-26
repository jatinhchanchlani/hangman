import React, { Component } from "react";
import "../css/letters.css";

class Letters extends Component {
  render() {
    return (
      <div className="row">
        {Array(26)
          .fill()
          .map((_, index) => String.fromCharCode("A".charCodeAt(0) + index))
          .map((char) => (
            <button key={char} className="letter-button btn btn-lg btn-primary">
              {char}
            </button>
          ))}
      </div>
    );
  }
}

export default Letters;
