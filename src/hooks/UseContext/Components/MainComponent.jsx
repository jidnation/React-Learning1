import React from "react";
import ComponentA from "./ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function MainComponent() {
  return (
    <div>
      <UserContext.Provider value={"JidNation"}>
        <ChannelContext.Provider value={"CodeEvolution"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default MainComponent;
