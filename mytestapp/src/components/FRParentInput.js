import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.compRef = React.createRef();
  }

  ClickHandler = () => {
    this.compRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.compRef} />
        <button onClick={this.ClickHandler}>Focus</button>
      </div>
    );
  }
}

export default FRParentInput;
