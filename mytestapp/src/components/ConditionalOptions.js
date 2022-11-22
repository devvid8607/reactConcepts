import React, { Component } from "react";

class ConditionalOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome Vidhya</div>;
    //using ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vidhya</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //using constants
    // let message;
    // if (this.state.isLoggedIn) message = <div>Welcome Vidhya</div>;
    // else message = <div>Welcome Guest</div>;
    // return <div>{message}</div>;
    //conditional
    // if (this.state.isLoggedIn) return <div>Welcome Vidhya</div>;
    // else return <div>Welcome Guest</div>;
  }
}

export default ConditionalOptions;
