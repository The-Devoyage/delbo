import React from "react";
import styled from "styled-components";

export interface DividerImgProps {
  backgroundImage: string;
  backgroundPosition?: string;
  backgroundOpacity?: string;
}

const DividerImg: React.FC<DividerImgProps> = ({
  children,
  backgroundImage,
  backgroundPosition,
  backgroundOpacity,
}) => {
  return (
    <StyledDividerImg>
      {children}
      <DividerImgBackground
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`,
          backgroundPosition,
          opacity: backgroundOpacity ? backgroundOpacity : 0.5,
        }}
      />
    </StyledDividerImg>
  );
};

const StyledDividerImg = styled.div`
  min-height: 300px;
  background: rgba(0, 0, 0);
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  padding-right: 0;
  padding-left: 0;
`;

export const DividerImgBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: repeat: no-repeat;
  position: absolute;
`;

export const DividerImgTextLeft = styled.p`
  width: 40%;
  font-size: 2rem;
  padding: 2rem 4rem;
  color: white;
  text-align: left;
  z-index: 100;
`;

export const DividerImgTextCenter = styled.p`
  width: 100%;
  font-size: 2rem;
  padding: 20%;
  padding: 2rem;
  color: white;
  text-align: center;
  z-index: 100;
`;

export default DividerImg;
