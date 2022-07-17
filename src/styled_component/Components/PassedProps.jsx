import React from "react";
import styled from "styled-components";
import { CustomText } from "./ExtendingProperty";

//Create an input component that will render an <input> tag with some styles

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function PassedProps() {
  return <div>
    <CustomText>Styling of input field</CustomText>
    <StyledInput defaultValue="@JidNation" type='Text' />
    <StyledInput defaultValue="@JidNation" type='Text' inputColor="purple"/>
  </div>;
}

export default PassedProps;
