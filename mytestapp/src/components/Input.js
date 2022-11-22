import React from "react";
class Input extends React.Component {
  state = {
    name: "Batman",
  };
  changeName = (newname) => {
    this.setState({
      name: newname,
    });
  };
  render() {
    return <div>{this.state.name}</div>;
  }
}
export default Input;
