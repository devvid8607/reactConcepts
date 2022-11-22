import React, { Component } from "react";

class MountLifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "test",
    };
    console.log("MountLifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("MountLifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("MountLifecycleB componentdidmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("MountLifecycleB shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("MountLifecycleB render");
    return <div>MountLifecycleB</div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("MountLifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("MountLifecycleB componentDidUpdate");
  }
}

export default MountLifecycleB;
