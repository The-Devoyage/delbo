import { CContainer } from "@coreui/react";
import React from "react";
import styled from "styled-components";

export interface StyledTitleProps {
  text: string;
  centered?: boolean;
}

const StyledTitle: React.FC<StyledTitleProps> = ({ text, centered }) => {
  return (
    <StyledCContainer style={{ textAlign: centered ? "center" : "left" }}>
      <h1>{text}</h1>
    </StyledCContainer>
  );
};

const StyledCContainer = styled(CContainer)`
  margin: 20px auto;
`;

export default StyledTitle;
