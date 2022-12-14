import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Hovered {count} times</button>
      </div>
    );
  }
}

export default HoverCounter2;
