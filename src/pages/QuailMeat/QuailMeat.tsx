import { CCol, CContainer, CRow, CImg } from "@coreui/react";
import React from "react";
import DividerImg from "../../components/DividerImg";
import StyledTitle from "../../components/StyledTitle";
import { StyledFadedPrimaryBackgorund } from "../Home/details/OurMission";

const QuailMeat = () => {
  return (
    <>
      <DividerImg backgroundImage="/CookedQuail.png" backgroundOpacity="1" />
      <CContainer style={{ margin: "5rem auto" }}>
        <StyledTitle text="FROZEN COTURNIX QUAIL MEAT IN DANVILLE, PA" />
        <p>
          Quail meat has a wild, robust flavor; however, its taste is less
          aggressive than other game birds. Satisfy your appetite for food that
          has a natural kick by purchasing our frozen Coturnix quail meat in
          Danville, PA. Although its texture is more fibrous than chicken or
          turkey, quail meat has a richer flavor than traditional poultry.
          Contact us for quality quail meat.
        </p>
      </CContainer>
      <StyledFadedPrimaryBackgorund className="my-3 p-4">
        <CRow className="p-3">
          <CCol className="d-flex justify-content-center my-2">
            <CImg
              src={`${process.env.PUBLIC_URL}/RawQuail.jpg`}
              fluid
              style={{ alignSelf: "center" }}
            />
          </CCol>
          <CCol md="6">
            <h3>ENJOY THE RICH FLAVOR OF QUAIL MEAT</h3>
            <p className="w-75">
              We harvest the meat in October when the quail is six months old.
              Then we take it to a certified butcher for cleaning and packaging
              and affixing the USDA seal on the meat to indicate it is ready for
              delivery. If you're not sure how to prepare and serve quail, we
              also provide quail recipes.
            </p>
          </CCol>
        </CRow>
      </StyledFadedPrimaryBackgorund>
      <CContainer style={{ margin: "5rem auto" }}>
        <h3 className="my-4">ENJOY THE HEALTH BENEFITS OF QUAIL MEAT</h3>
        <p className="text-left my-2">
          When it comes to game meats, there is little that can beat succulent
          and flavorful quail meat. Quails are small in nature, and a single
          serving of quail meat is around three to five ounces in size.
        </p>

        <p className="text-left my-2">
          One of the best reasons you should be eating more gourmet Coturnix
          Quail Products instead of regular poultry meat is health benefits. For
          example, studies have shown that quail meat is lower in fat content
          compared to chicken because quail meat contains approximately two
          grams of fat in a single serving. And that same single serving will
          have more protein than the same size serving of chicken.
        </p>

        <p className="text-left my-2">
          When it comes to lipids content, quail has a little more saturated
          fats, but note that it also has a much higher content of beneficial,
          polyunsaturated fatty acids that we all need. In addition to that,
          Coturnix Quail Products also contain many healthy minerals, such as
          phosphorous, iron, copper, zinc, and selenium. In terms of vitamins,
          quail meat has a high content of Vitamin B6 and Vitamin B3. All in
          all, the mineral and vitamin content of quail meat is significantly
          higher than that of a regular broiler chicken.
        </p>
      </CContainer>
    </>
  );
};

export default QuailMeat;
