import { CContainer, CImg } from "@coreui/react";
import StyledTitle from "../../components/StyledTitle";

const Bakery = () => {
  return (
    <>
      <StyledTitle text="Gourmet Bakery" />
      <CContainer>
        <CImg src="bakery2.jpg" width="100%" />
      </CContainer>
    </>
  );
};

export default Bakery;
