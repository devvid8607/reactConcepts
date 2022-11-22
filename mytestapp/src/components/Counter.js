import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value:", this.state.count);
    //   }
    // );
    // console.log("Outside Callback:", this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementFiveCounter() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }
  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <button onClick={() => this.incrementFiveCounter()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
