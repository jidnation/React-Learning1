import React from "react";
import styled from "styled-components";
import { CustomText } from "./ExtendingProperty";

const Input = styled.input.attrs((props) => ({
  //we can defined static props
  type: "text",
  //or we can define dynamic props
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  //here we use the dynamically computed prop
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

//Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({ type: "password" })`
  // Similarly, border will override Input's border
  border: 2px solid aqua;
`;

function UsingProps() {
  return (
    <div>
      <CustomText>Using of props within the component</CustomText>
      <Input placeholder="A small text input" />
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      <CustomText>Overriding of props </CustomText>
       {/*Notice we can still use the size attr from Input*/}
      <PasswordInput placeholder="A bigger password input" size="2em" />
    </div>
  );
}

export default UsingProps;
