import React from "react";
import styled from "styled-components";
import { CustomText } from "./ExtendingProperty";

const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; //when hovered
  }

  & ~ &{
    background: tomato; //<Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; //<Thing> direct siblings 
  }

  &.something {
background: orange; //<Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; //<Thing> inside another element labeled ".something-else"
  }
`;
function PseudoMargics() {
  return (
    <div>
      <Thing>
        what is going on here
      </Thing>
      <CustomText>Testing indirect siblings stying using & ~ & </CustomText>
      <Thing>I am indirect siblings</Thing>
      <br/>
      <Thing>I am indirect siblings2</Thing>
      <Thing>I am direct siblings to 2</Thing>
      <CustomText>This next guy is giving a something class</CustomText>
      <Thing className="something">The sun is shinning.....</Thing>
      <CustomText>Customising inside another class</CustomText>
      <div className="something-else">
        <Thing>Splendid</Thing>
        <br/>
      </div>
    </div>
  );
}

export default PseudoMargics;
