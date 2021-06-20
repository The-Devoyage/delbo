import { CContainer } from "@coreui/react";
import React from "react";
import DividerImg from "../../components/DividerImg";
import StyledTitle from "../../components/StyledTitle";

const Events = () => {
  return (
    <>
      <DividerImg backgroundOpacity="1" backgroundImage="/Events.jpg" />
      <CContainer style={{ margin: "5rem auto" }}>
        <StyledTitle text="Events" />

        <p>
          We will be attending the Danville Farmer’s Market every Saturday
          morning from 8:00 AM to 12:00 AM May through October. We will be
          selling Fresh Quail Eggs, Pickled Quail Eggs, Frozen Quail Meat,
          Gourmet Bakery Products, and Fresh Produce from our personal garden.
          We will also be sampling our Pickled Quail Eggs.
        </p>
      </CContainer>
    </>
  );
};

export default Events;
