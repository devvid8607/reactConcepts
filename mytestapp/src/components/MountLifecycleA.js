import React, { Component } from "react";
import MountLifecycleB from "./MountLifecycleB";

class MountLifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "test",
    };
    console.log("MountLifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountLifecycleA getDerivedStateFromProps");
    return null;
  }

  changeState = () => {
    this.setState({
      name: "Codeevolution",
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("MountLifecycleA shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("MountLifecycleA render");
    return (
      <div>
        <div>MountLifecycleA</div>
        <div>
          <MountLifecycleB />
        </div>
        <div>
          <button onClick={this.changeState}>Change State</button>
        </div>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("MountLifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("MountLifecycleA componentDidUpdate");
  }

  componentDidMount() {
    console.log("MountLifecycleA componentdidmount");
  }
}

export default MountLifecycleA;
