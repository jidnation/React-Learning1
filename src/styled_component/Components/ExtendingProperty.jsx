import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Lesson1";

//A new component based on Button, but with some override styles
const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`;
export const CustomText = styled.p`
  font-size: 0.7em;
`;

const ReversedButton = props => <StyledButton {...props} children={props.children.split('').reverse()} />

function ExtendingProperty() {
  return (
    <div>
      <CustomText>Extending property</CustomText>
      <TomatoButton>Tomato Button</TomatoButton>
      <CustomText>Using button as a link</CustomText>
      <StyledButton as="a" href="http://google.com">
        Google
      </StyledButton>
      <CustomText>Reversed Button</CustomText>
      <ReversedButton>Do not reverse my word</ReversedButton>
    </div>
  );
}

export default ExtendingProperty;
