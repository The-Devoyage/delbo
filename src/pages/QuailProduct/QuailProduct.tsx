import { CCol, CContainer, CDataTable, CImg, CRow } from "@coreui/react";
import DividerImg from "../../components/DividerImg";
import StyledTitle from "../../components/StyledTitle";
import { StyledFadedPrimaryBackgorund } from "../Home/details/OurMission";
import { eggProducts, pickeledEggs, quailProducts } from "./Products/products";

const QuailProduct = () => {
  const productFieldsEggs = [{ key: "title", label: "Quantity" }, "price"];

  const prodcutFieldsPickeledEggs = [
    { key: "title", label: "Quantity" },
    "description",
    "price",
  ];
  return (
    <>
      <DividerImg backgroundImage="Chicks.jpg" backgroundOpacity="1" />
      <CContainer style={{ margin: "5rem auto" }}>
        <StyledTitle text="COTURNIX QUAIL PRODUCTS IN DANVILLE, PA" />
        <p>
          We raise quail in the natural, kind, and humane fashion without
          antibiotics, growth hormones, and other drugs. Contact us for healthy
          Coturnix quail products in Danville, PA.
        </p>
      </CContainer>
      <StyledFadedPrimaryBackgorund className="my-3 p-4">
        <CContainer
          className="d-flex justify-content-center align-items-center"
          style={{ margin: "5rem auto" }}
        >
          <CRow className="w-100">
            <CCol md="8">
              <h2>
                FRESH COTURNIX QUAIL EGGS (SEASONAL FROM JUNE THRU OCTOBER)
              </h2>
              <CDataTable items={eggProducts} fields={productFieldsEggs} />
            </CCol>
            <CCol
              md="4"
              className="d-flex justify-content-center align-items-cennter"
            >
              <CImg
                src={`${process.env.PUBLIC_URL}/EggCarton.jpg`}
                className="align-self-center"
              />
            </CCol>
          </CRow>
        </CContainer>
      </StyledFadedPrimaryBackgorund>
      <CContainer
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5rem auto" }}
      >
        <CRow className="w-100">
          <h2>Pickeled Eggs and Platters</h2>
          <CDataTable items={pickeledEggs} fields={prodcutFieldsPickeledEggs} />
          <CCol lg="12" className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column align-items-center mx-2">
              <CImg
                src={`${process.env.PUBLIC_URL}/SpicedBeetEggs.jpg`}
                className="align-self-center my-2"
              />
              <span>Spiced Beet</span>
            </div>
            <div className="d-flex flex-column align-items-center mx-2">
              <CImg
                src={`${process.env.PUBLIC_URL}/RedWineBeet.jpg`}
                className="align-self-center my-2"
              />
              <span>Red Wine Beet</span>
            </div>
            <div className="d-flex flex-column align-items-center mx-2">
              <CImg
                src={`${process.env.PUBLIC_URL}/BlendedMustardEggs.jpg`}
                className="align-self-center my-2"
              />
              <span>Blended Mustard</span>
            </div>
          </CCol>
        </CRow>
      </CContainer>
      <StyledFadedPrimaryBackgorund className="p-4">
        <CContainer className="d-flex justify-content-center align-items-center">
          <CRow className="w-100">
            <CCol md="8">
              <h2>Frozen Coturnix Quail Meat</h2>
              <CDataTable items={quailProducts} fields={productFieldsEggs} />
            </CCol>
            <CCol
              md="4"
              className="d-flex justify-content-center align-items-cennter"
            >
              <CImg
                src={`${process.env.PUBLIC_URL}/RawQuail2.jpg`}
                className="align-self-center"
              />
            </CCol>
          </CRow>
        </CContainer>
      </StyledFadedPrimaryBackgorund>
    </>
  );
};

export default QuailProduct;
