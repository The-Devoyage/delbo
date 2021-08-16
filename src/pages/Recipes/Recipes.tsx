import { CContainer, CImg } from "@coreui/react";
import StyledTitle from "../../components/StyledTitle";

export const RecipesPage = () => {
  return (
    <>
      <StyledTitle text="Gourmet Bakery" />
      <CContainer>
        <CImg src="recipes.jpg" width="100%" />
      </CContainer>
    </>
  );
};
