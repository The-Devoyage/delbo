import { CContainer } from "@coreui/react";

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <CContainer style={{ margin: "5rem auto" }}>
      <h2>CONTACT</h2>
      <CContainer>
        <strong>Phone</strong>
        <span>(570) 284-2512</span>
      </CContainer>
      <CContainer>
        <strong>Hours of Operation</strong>
        <span>Monday-Friday, 9 a.m.-5 p.m.</span>
        <span>Weekends by Appointment</span>
      </CContainer>
      <CContainer>
        <strong>Address</strong>
        <span>53 Moser Rd.</span>
        <span>Danville PA, 17821</span>
      </CContainer>
      <CContainer>
        <strong>Service Area</strong>
        <span>Danville and Surrounding Areas</span>
      </CContainer>
    </CContainer>
  );
};

export default Contact;
