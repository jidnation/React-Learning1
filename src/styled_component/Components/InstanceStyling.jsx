import React from "react";
import styled, { css } from "styled-components";
import { CustomText } from "./ExtendingProperty";

const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return css`
          background-color: black;
          font-size: 0.7em;
          padding: 0.5em 1em;
          border-radius: 3px;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

function InstanceStyling() {
  return (
    <>
      <CustomText>Something is going on here my guy, watch out!</CustomText>
      <Label>
        <Input/>
        <LabelText>Foo</LabelText>
      </Label>
      <CustomText>Dark version</CustomText>
      <Label>
        <Input/>
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
    </>
  );
}

export default InstanceStyling;
