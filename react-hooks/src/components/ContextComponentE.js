import React, { useContext } from "react";
import { UserContext, Channelcontext } from "./ContextComponentC";
function ContextComponentE() {
  const user = useContext(UserContext);
  const subject = useContext(Channelcontext);
  return (
    <div>
      {user} is learning {subject}
    </div>
  );
}

export default ContextComponentE;
