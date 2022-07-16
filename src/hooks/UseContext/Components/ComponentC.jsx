import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./MainComponent";

function ComponentC() {
    //initialing the values
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
      ComponentC
      {/* <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
            //   <div>User context value {user}</div>;
          );
        }}
      </UserContext.Consumer> */}
      {/* Using of useContext hooks for consuming the provided context */}
      <div>
        User context value {user}, 
        channel context value {channel}
      </div>
    </div>
  );
}

export default ComponentC;
