import DividerImg, {
  DividerImgTextCenter,
  DividerImgTextLeft,
} from "../../components/DividerImg";
import MainAbout from "./details/MainAbout";
import TryOurProducts from "./details/TryOurProducts";
import OurMission from "./details/OurMission";
import Contact from "../../components/Contact";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import { CCol, CContainer, CRow } from "@coreui/react";

const Home = () => {
  return (
    <>
      <DividerImg
        backgroundImage="call-to-action.png"
        backgroundPosition="50% 1%"
      >
        <DividerImgTextLeft>
          WE ENGAGE IN HUMANE FARMING, KIND DOMINION AND ECOLOGICAL
          RESPONSIBILITY
        </DividerImgTextLeft>
      </DividerImg>
      <MainAbout />
      <TryOurProducts />
      <DividerImg backgroundImage="FoodPrep.png">
        <DividerImgTextCenter>
          ENJOY THE GREAT TASTE OF QUAIL EGGS AND MEAT WHEN YOU WANT IT.
        </DividerImgTextCenter>
      </DividerImg>
      <OurMission />
      <CContainer className="d-flex" style={{ flexWrap: "wrap" }}>
        <Contact />
        <ContactForm />
      </CContainer>
      <Map />
    </>
  );
};

export default Home;