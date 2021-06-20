import { CContainer, CImg } from "@coreui/react";
import StyledTitle from "../../components/StyledTitle";
import { StyledFadedPrimaryBackgorund } from "../Home/details/OurMission";

const Bakery = () => {
  return (
    <>
      <StyledFadedPrimaryBackgorund className="p-4">
        <StyledTitle text="Gourmet Bakery" />
        <CContainer>
          <CImg src="menu-cakes.png" width="100%" />
        </CContainer>
      </StyledFadedPrimaryBackgorund>
    </>
  );
};

export default Bakery;
