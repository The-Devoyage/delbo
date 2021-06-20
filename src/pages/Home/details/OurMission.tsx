import { CContainer } from "@coreui/react";
import React from "react";
import styled from "styled-components";

export interface OurMissionProps {}

const OurMission: React.FC<OurMissionProps> = () => {
  return (
    <StyledFadedPrimaryBackgorund className="d-flex align-items-center">
      <CContainer className="d-flex flex-column">
        <h1>OUR MISSION</h1>
        <p>
          Our mission is to raise quail in the natural, kind, and humane fashion
          without antibiotics, growth hormones, and other drugs. And, in doing
          so, to provide healthy quail products to our customers without harming
          the environment.
        </p>
      </CContainer>
    </StyledFadedPrimaryBackgorund>
  );
};

export const StyledFadedPrimaryBackgorund = styled.div`
  background-color: #fde3e0;
  min-height: 200px;
  text-align: left;
`;

export default OurMission;
