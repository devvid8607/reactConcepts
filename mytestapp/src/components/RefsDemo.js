//set focus on an input on page load
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); //first approach step one create ref
    //second approach callback ref-old approach
    this.cbRef = null;

    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  componentDidMount() {
    if (this.cbRef) this.cbRef.focus();
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
