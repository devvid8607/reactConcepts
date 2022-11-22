import React, { Component } from "react";

export class Classclick extends Component {
  clickHandler() {
    console.log("class button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Button Clicked</button>
      </div>
    );
  }
}

export default Classclick;
