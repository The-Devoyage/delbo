import { CContainer, CImg, CLabel } from "@coreui/react";
import StyledTitle from "../../../components/StyledTitle";

export interface MainAboutProps {}

const MainAbout: React.FC<MainAboutProps> = () => {
  return (
    <CContainer style={{ margin: "5rem auto" }}>
      <StyledTitle text="COTURNIX QUAIL MEAT IN DANVILLE, PA" />
      <CContainer>
        <p>
          Quail eggs and meat are tasty alternatives to chicken. Enhance your
          menu with Coturnix quail products in Danville, PA. At Delbo Farms, we
          raise Coturnix Japanese quail and sell their meat and eggs. Our
          quails’ natural diet features corn, which helps them stay healthy and
          improve their meat quality. Reach out to our quail farm to order
          healthy Coturnix quail meat products at competitive prices.
          Additionally, we offer Coturnix quail recipes to try at home.
        </p>
        <CContainer
          className="d-flex justify-content-center align-items-center flex-wrap"
          style={{ margin: "5rem auto" }}
        >
          <CContainer className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-4">
            <CImg
              src={`${process.env.PUBLIC_URL}/Quail-Egg.png`}
              style={{ maxWidth: "200px" }}
            />
            <CLabel>Fresh Coturnix Quail Eggs</CLabel>
          </CContainer>
          <CContainer className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-4">
            <CImg
              src={`${process.env.PUBLIC_URL}/Eggs.png`}
              style={{ maxWidth: "200px" }}
            />
            <CLabel>Pickled Coturnix Quail Eggs</CLabel>
          </CContainer>
          <CContainer className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-4">
            <CImg
              src={`${process.env.PUBLIC_URL}/Quail.png`}
              style={{ maxWidth: "200px" }}
            />
            <CLabel>Frozen Coturnix Quail Meat</CLabel>
          </CContainer>
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default MainAbout;
