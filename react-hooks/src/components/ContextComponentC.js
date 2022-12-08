import React from "react";
import ContextComponentD from "./ContextComponentD";

export const UserContext = React.createContext();
export const Channelcontext = React.createContext();

function ContextComponentC() {
  return (
    <div>
      <UserContext.Provider value={"Vidhya"}>
        <Channelcontext.Provider value={"React"}>
          <ContextComponentD />
        </Channelcontext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContextComponentC;
