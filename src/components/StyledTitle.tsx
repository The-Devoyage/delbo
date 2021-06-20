import { CContainer } from "@coreui/react";
import React from "react";
import styled from "styled-components";

export interface StyledTitleProps {
  text: string;
}

const StyledTitle: React.FC<StyledTitleProps> = ({ text }) => {
  return (
    <StyledCContainer>
      <h1>{text}</h1>
    </StyledCContainer>
  );
};

const StyledCContainer = styled(CContainer)`
  margin: 20px auto;
`;

export default StyledTitle;
