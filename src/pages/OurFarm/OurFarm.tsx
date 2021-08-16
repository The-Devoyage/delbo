import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CImg,
  CRow,
} from "@coreui/react";
import React from "react";
import styled from "styled-components";
import DividerImg from "../../components/DividerImg";
import StyledTitle from "../../components/StyledTitle";

export interface OurFarmProps {}

const OurFarm: React.FC<OurFarmProps> = () => {
  return (
    <div>
      <DividerImg
        backgroundImage="/eggs-image.png"
        backgroundPosition="0 35%"
        backgroundOpacity="1"
      />
      <CContainer style={{ margin: "5rem auto" }}>
        <StyledTitle text="Our Farm" />
        <p>
          At Delbo Farms, we take special care to raise our birds in the best
          conditions. This step ensures that they have room to grow and flourish
          in a stress-free environment. Our quails thrive on a natural corn diet
          that keeps them healthy and leads to high-quality meat. As a Coturnix
          quail farm, we have multiple enclosures that allow the birds to share
          space while also being protected from the weather and any predators
          that may be around.
        </p>
      </CContainer>
      <CContainer>
        <CRow style={{ margin: "2rem auto" }}>
          <CCol md="6">
            <CImg src="/FarmView.png" width="100%" className="p-3" />
          </CCol>
          <CCol md="6">
            <StyledCCard>
              <CCardHeader>
                <h3>Room To Grow</h3>
              </CCardHeader>
              <CCardBody>
                <p>
                  Eating healthy quail meat is an excellent source of protein,
                  vitamins, and minerals. A quarter-pound of quail meat provides
                  28 grams of protein so that you can get nearly half of your
                  recommended daily amount with one delicious portion.
                </p>
              </CCardBody>
            </StyledCCard>
          </CCol>
        </CRow>
        <CRow style={{ margin: "2rem auto" }}>
          <CCol md="6">
            <StyledCCard>
              <CCardHeader>
                <h3>Quail Care</h3>
              </CCardHeader>
              <CCardBody>
                <p>
                  Our farm provides a wide range of Coturnix quail products to
                  customers. In addition to our frozen meat, we are also happy
                  to offer fresh eggs from June through October along with
                  pickled eggs in the jar, or you can order a platter.
                </p>
              </CCardBody>
            </StyledCCard>
          </CCol>
          <CCol md="6">
            <CImg src="/DogWithFarm.png" width="100%" className="p-3" />
          </CCol>
        </CRow>
        <CRow style={{ margin: "2rem auto" }}>
          <CCol md="6">
            <CImg src="/HoldingBirds.png" width="100%" className="p-3" />
          </CCol>
          <CCol md="6">
            <StyledCCard>
              <CCardHeader>
                <h3>Humanely Raised</h3>
              </CCardHeader>
              <CCardBody>
                <p>
                  We serve the Danville area from our farm Monday to Friday from
                  9 a.m. to 5 p.m., and we’re open on the weekend by
                  appointment. You can even find meat, eggs, and produce from
                  Delbo Farms at the Danville Farmer’s Market from May through
                  October.
                </p>
              </CCardBody>
            </StyledCCard>
          </CCol>
        </CRow>
        <CRow
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CCol md="6">
            <CImg src="/TwoHouses.png" width="100%" className="p-3" />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

const StyledCCard = styled(CCard)`
  margiin: 20px;
`;

export default OurFarm;
