import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super(); //super() will call the constructor of its parent class. This is required when you need to access some variables from the parent class.
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
