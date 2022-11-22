//higher order component
import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseEnter={incrementCount}>
          {this.props.name} Hovered {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverComponent, 5);
