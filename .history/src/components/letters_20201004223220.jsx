import React, { Component } from "react";

class Letters extends Component {
  render() {
    return (
      <div className="row">
        {Array(26)
          .fill()
          .map((_, index) => String.fromCharCode("A".charCodeAt(0) + index))
          .map((char) => (
            <button key={char} className="btn btn-primary">
              {char} + " "
            </button>
          ))}
      </div>
    );
  }
}

export default Letters;
