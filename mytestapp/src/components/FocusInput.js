import React from "react";
import Input from "./Input";

class FocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.ChildElement = React.createRef();
  }
  handleClick = () => {
    const childelement = this.ChildElement.current;
    alert("current state of child is : " + childelement.state.name);
    childelement.changeName("Aakash");
  };
  render() {
    return (
      <div>
        <Input ref={this.ChildElement} />
        <button onClick={this.handleClick}>Show real name</button>
      </div>
    );
  }
}
export default FocusInput;
