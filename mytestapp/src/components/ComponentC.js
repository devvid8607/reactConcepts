import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./UserContext";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserProvider value="vidhya">
          <ComponentE />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentC;
