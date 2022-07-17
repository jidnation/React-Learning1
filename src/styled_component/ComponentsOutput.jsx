import React from "react";
import Animation from "./Components/Animation";
import ExtendingProperty from "./Components/ExtendingProperty";
import HelloWorld from "./Components/HelloWorld";
import InstanceStyling from "./Components/InstanceStyling";
import { Container, StyledButton } from "./Components/Lesson1";
import PassedProps from "./Components/PassedProps";
import PresedenceBoost from "./Components/PresedenceBoost";
import PseudoMargics from "./Components/PseudoMargics";
import RoutingStyling from "./Components/RoutingStyling";
import UsingProps from "./Components/UsingProps";

function ComponentsOutput() {
  return (
    <>
      <Container>
        <StyledButton>Just Button</StyledButton>
        <StyledButton primary>Primary Button</StyledButton>
      </Container>
      <HelloWorld />
      <ExtendingProperty />
      <RoutingStyling/>
      <PassedProps/>
      <PseudoMargics/>
      <InstanceStyling/>
      <PresedenceBoost/>
      <UsingProps/>
      <Animation/>
    </>
  );
}

export default ComponentsOutput;
