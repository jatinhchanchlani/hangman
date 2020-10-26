import React, { Component } from "react";

class Letters extends Component {
  render() {
    return (
      <div className="row">
          {Array(26).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));}
        <button className="btn btn-primary">A</button>
      </div>
    );
  }
}

export default Letters;
