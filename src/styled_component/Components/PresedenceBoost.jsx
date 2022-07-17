import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CustomText } from "./ExtendingProperty";

const Thing = styled.div`
  && {
    color: blue;
  }

  .something {
    border: 1px solid green; //an element labeled ".something" inside <Thing>
    display: block;
    color: orange;
  }
`;

const GlobalStyle = createGlobalStyle`
    div${Thing} {
        color: red;
    }
`;

function PresedenceBoost() {
  return (
    <>
      <CustomText>Don't get yet, something about &&</CustomText>
      <Thing>I am ordinary thing</Thing>
      <GlobalStyle />
        <Thing>Who am I</Thing>
      <CustomText>Testing class inside of a Thing Component </CustomText>
      <Thing>
        <label htmlFor="foo-button" className="something">Mystery button</label>
        <br/>
        <button id="foo-button">What do I do?</button>
      </Thing>

    </>
  );
}

export default PresedenceBoost;
