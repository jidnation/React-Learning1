import React from "react";
import styled from "styled-components";
import { CustomText } from "./ExtendingProperty";

//This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className} href="g">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`;
function RoutingStyling() {
  return (
    <>
    <CustomText>Working with Link</CustomText>
      <Link>UnStyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </>
  );
}

export default RoutingStyling;
